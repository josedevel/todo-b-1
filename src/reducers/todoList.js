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
            if(a.priority === 'high' && b.priority === 'high'){
              return 0;
            }
            if(a.priority === 'high' && b.priority === 'medium'){
              return -1;
            }
            if(a.priority === 'high' && b.priority === 'low'){
              return -1;
            }
            if(a.priority === 'medium' && b.priority === 'high'){
              return 1;
            }
            if(a.priority === 'medium' && b.priority === 'low'){
              return -1;
            }
            if(a.priority === 'low' && b.priority === 'high'){
              return 1;
            }
            if(a.priority === 'low' && b.priority === 'medium'){
              return 1;
            }


            if(b.priority === 'high' && a.priority === 'medium'){
              return 1;
            }
            if(b.priority === 'high' && a.priority === 'low'){
              return 1;
            }
            if(b.priority === 'medium' && a.priority === 'high'){
              return -1;
            }
            if(b.priority === 'medium' && a.priority === 'low'){
              return -1;
            }
            if(b.priority === 'low' && a.priority === 'high'){
              return 1;
            }
            if(b.priority === 'low' && a.priority === 'medium'){
              return 1;
            }


            if(a.priority === 'medium' && b.priority === 'medium'){
              return 0;
            }
            if(a.priority === 'low' && b.priority === 'low'){
              return 0;
            }
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