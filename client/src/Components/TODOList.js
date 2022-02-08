import {connect} from 'react-redux';
import {todoListUpdate} from '../actions/actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
    return {
      // the reducer
      ...state.todoList
    }
};

const mapDispatchToProps = {
  todoListUpdate
};

const TODOList = (props) => {

    const handleCheck = (event) => {
      props.todoListUpdate({id: props.data._id, checked: event.target.checked});
    }

    const handleDelete = (event) => {
      props.todoListUpdate({id: props.data._id, deleted: true});
    }

    return (
        <div id={props.key} className={props.data.deleted ? 'TODO_deleted' : 'TODOList'}>
          {/*props.children*/}
          <input type={'checkbox'} id={`TODO_checkbox_${props.data.id}`} checked={props.data.checked} onClick={handleCheck} /> &nbsp;
          <span id={`TODO_text_${props.data.id}`} className={props.data.checked ? 'TODO_checked' : ''}> {props.data.text} | {props.data.priority} </span> &nbsp;
          <button type="button" id={`TODO_delete_${props.data.id}`} onClick={handleDelete}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);