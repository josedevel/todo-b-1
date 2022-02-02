export const TODO_LIST_ADD = 'TODO_LIST_ADD';
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

