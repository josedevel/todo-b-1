import {connect} from 'react-redux';
import {todoListCheck, todoListDelete, todoListRequest} from '../actions/actions.js';

const mapStateToProps = state => {
  //console.log(state);
    return {
      // test
      ...state.todoList
    }
};

const mapDispatchToProps = {
  todoListCheck,
  todoListDelete,
};

const TODOList = (props) => {

    const handleCheck = (event) => {
      props.todoListCheck(props.data.id, event.target.checked);
    }

    const handleDelete = (event) => {
      props.todoListDelete(props.data.id, true);
    }

    return (
        <div id={props.key} className={props.data.deleted ? 'TODO_deleted' : 'TODOList'}>
          {/*props.children*/}
          <input type={'checkbox'} id={`TODO_checkbox_${props.data.id}`} onClick={handleCheck} /> &nbsp;
          <span id={`TODO_text_${props.data.id}`} className={props.data.checked ? 'TODO_checked' : ''}> {props.data.text} </span> &nbsp;
          <button type="button" id={`TODO_delete_${props.data.id}`} onClick={handleDelete}>X</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);