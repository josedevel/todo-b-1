import {requests} from '../agent.js';
export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';
export const TODO_LIST_FETCH = 'TODO_LIST_FETCH';
export const TODO_LIST_ADD = 'TODO_LIST_ADD';
export const TODO_LIST_ADD_API = 'TODO_LIST_ADD_API';
export const TODO_LIST_DELETE = 'TODO_LIST_DELETE';
export const TODO_LIST_CHECK = 'TODO_LIST_CHECK';
export const TODO_LIST_PRIORITY = 'TODO_LIST_PRIORITY';
export const TODO_LIST_UPDATE = 'TODO_LIST_UPDATE';

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
        dispatch(todoListAdd(todoList));
      });
    }
}

export const todoListRequest = () => ({
    type: TODO_LIST_REQUEST
});

export const todoListFetch = () => {
    return (dispatch) => {
        dispatch(todoListRequest());
        return requests.get('/todos')
          .then(response => 
            {
              dispatch(todoListAdd(response))
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

