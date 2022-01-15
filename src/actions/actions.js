export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';
export const TODO_LIST_ADD = 'TODO_LIST_ADD';
export const TODO_LIST_DELETE = 'TODO_LIST_DELETE';
export const TODO_LIST_CHECK = 'TODO_LIST_CHECK';

export const todoListRequest = () => ({
    type: TODO_LIST_REQUEST,
});

export const todoListAdd = (todoList) => ({
    type: TODO_LIST_ADD,
    todoList: todoList
});

export const todoListDelete = (todoListId, deleted) => ({
    type: TODO_LIST_DELETE,
    todoListId: todoListId,
    deleted: deleted
});

export const todoListCheck = (todoListId, checked) => ({
    type: TODO_LIST_CHECK,
    todoListId: todoListId,
    checked: checked
});
