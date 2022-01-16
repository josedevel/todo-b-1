import {
    TODO_LIST_REQUEST,
    TODO_LIST_ADD,
    TODO_LIST_CHECK
} from "../actions/actions";

export default(state = {
    todoLists: [],
}, action) => {
    switch (action.type) {
      case TODO_LIST_REQUEST:
        //console.log(state.todoLists);
        return {
          ...state,
          // test
          todoLists: state.todoLists
        };
      case TODO_LIST_ADD:
        return {
          ...state,
          // test
          todoLists: state.todoLists.concat(action.todoList)
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
          }),
        };
      default:
        return state;
    }
}