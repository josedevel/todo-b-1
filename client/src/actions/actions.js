import {requests} from '../agent.js';
export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';
export const TODO_LIST_ADD = 'TODO_LIST_ADD';
export const TODO_LIST_ADD_API = 'TODO_LIST_ADD_API';
export const TODO_LIST_DELETE = 'TODO_LIST_DELETE';
export const TODO_LIST_CHECK = 'TODO_LIST_CHECK';
export const TODO_LIST_PRIORITY = 'TODO_LIST_PRIORITY';
export const TODO_LIST_UPDATE = 'TODO_LIST_UPDATE';
export const TODO_LIST_DATA_RECEIVE = 'TODO_LIST_DATA_RECEIVE';

/* ADD action */
export const todoListAdd = (todoList) => ({
    type: TODO_LIST_ADD,
    todoList: todoList
});

/* Delete action */
export const todoListDelete = (todoListId, deleted) => ({
    type: TODO_LIST_DELETE,
    todoListId: todoListId,
    deleted: deleted
});

/* Check action */
export const todoListCheck = (todoListId, checked) =>  {
    return { 
      type: TODO_LIST_CHECK,
      todoListId: todoListId,
      checked: checked
    }
};

export const todoListAddAPI = (todoList) => {
    return (dispatch) => {
      return requests.post('/todo', todoList[0], false).then(function(response){
        dispatch(todoListAdd([response]));
      });
    }
}

export const todoListRequest = () => ({
    type: TODO_LIST_REQUEST
});

export const todoListDataReceive = (data) => ({
    type: TODO_LIST_DATA_RECEIVE,
    data: data
})

export const todoListFetch = (dateString) => {
    return (dispatch) => {
        dispatch(todoListRequest());
        return requests.get('/todos?date='+dateString)
          .then(response => 
            {
              //dispatch(todoListAdd(response))
              dispatch(todoListDataReceive(response))
            })
          //.catch(error => dispatch(blogPostListError(error)));
    }
}

export const todoListUpdate = (todoListUpdate) => {
    return (dispatch) => {
        requests.patch('/todo/'+todoListUpdate.id, todoListUpdate)
        .then(response => {
            if(todoListUpdate.hasOwnProperty('checked') && typeof todoListUpdate.checked !== 'undefined') {
                dispatch(todoListCheck(todoListUpdate.id, todoListUpdate.checked))
            }
            if(todoListUpdate.hasOwnProperty('deleted') && typeof todoListUpdate.deleted !== 'undefined') {
                dispatch(todoListDelete(todoListUpdate.id, todoListUpdate.deleted))
            }
        })
    }
}

