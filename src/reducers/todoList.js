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
        /*let list = state.todoLists.filter(element => element.id === action.todoListId);
        list[0].checked = action.checked;*/
        //console.log(state);
        state.todoLists[action.todoListId].checked = action.checked;
        //console.log(state);
        return {
          ...state,
          /*todoLists: state.todoLists,*/
          test: 1
        };
      default:
        return state;
    }
}