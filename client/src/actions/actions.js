import {requests} from '../agent.js';
export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';
export const TODO_LIST_RECEIVED = 'TODO_LIST_RECEIVED';
export const TODO_LIST_FETCH = 'TODO_LIST_FETCH';
export const TODO_LIST_ADD = 'TODO_LIST_ADD';
export const TODO_LIST_ADD_API = 'TODO_LIST_ADD_API';
export const TODO_LIST_DELETE = 'TODO_LIST_DELETE';
export const TODO_LIST_CHECK = 'TODO_LIST_CHECK';
export const TODO_LIST_PRIORITY = 'TODO_LIST_PRIORITY';

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
export const todoListCheck = (todoListId, checked) => ({
    type: TODO_LIST_CHECK,
    todoListId: todoListId,
    checked: checked
});

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

export const todoListReceived = data => ({
    type: TODO_LIST_RECEIVED,
    data: data
});

export const todoListFetch = () => {

}

