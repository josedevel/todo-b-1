import {
    TODO_LIST_ADD,
    TODO_LIST_CHECK,
    TODO_LIST_DELETE,
} from "../actions/actions";

export default(state = {
    todoLists: [],
}, action) => {
    switch (action.type) {
      case TODO_LIST_ADD:
        return {
          ...state,
          //todoLists: state.todoLists.concat(action.todoList),
          todoLists: state.todoLists.concat(action.todoList).slice().sort(function(a, b) {
            console.log('test1');
            if(a.time > b.time){
              return -1;
            }
            if(b.time > a.time){
              return 1;
            }
            return 0;
          })
        };
      case TODO_LIST_CHECK:
        return {
          ...state,
          todoLists: state.todoLists.map(element => {
            if(element.id !== action.todoListId){
              return element;
            }
            return {
              ...element,
              checked: action.checked
            }
          })
        };
        case TODO_LIST_DELETE:
          return {
            ...state,
            todoLists: state.todoLists.map(element => {
              if(element.id !== action.todoListId){
                return element;
              }
              return {
                ...element,
                deleted: action.deleted
              }
            })
          };
      default:
        return state;
    }
}