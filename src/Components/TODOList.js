import {useEffect} from 'react';
import {connect} from 'react-redux';
import {todoListCheck, todoListDelete, todoListRequest} from '../actions/actions.js';

/*
 state: checked, deleted
 if state.checked then show class.
 if state.delete then add class.
*/

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
  // test
  //todoListRequest
};

const TODOList = (props) => {

    /*useEffect(() => {
        //props.todoListRequest();
        props.todoListRequest();
        console.log(props);
    });*/

    const handleCheck = (event) => {
      /*let checkID = event.target.id;
      checkID = checkID.replace('TODO_checkbox_', '');
      let TODOListText = document.getElementById('TODO_text_'+checkID);
      if(!event.target.checked) {
        TODOListText.classList.remove('TODO_checked');
      }else{
        TODOListText.classList.add('TODO_checked');
      }*/
      props.todoListCheck(props.data.id, event.target.checked);
    }

    const handleDelete = (event) => {
      /*let checkID = event.target.id;
      checkID = checkID.replace('TODO_delete_', '');
      let TODOList = document.getElementById(checkID);
      TODOList.classList.add('TODO_deleted');*/
      //props.todoListDelete(props.data.id, !event.target.checked);
    }

    console.log(props);
    //console.log(props.todoLists);

    return (
        <div className="TODOList" id={props.key}>
          {/*props.children*/}
          <input type={'checkbox'} id={`TODO_checkbox_${props.data.id}`} onClick={handleCheck} /> &nbsp;
          <span id={`TODO_text_${props.data.id}`} className={props.data.checked ? 'TODO_checked' : ''}> {props.data.text} </span> &nbsp;
          <button type="button" id={`TODO_delete_${props.data.id}`} onClick={handleDelete}>X</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);