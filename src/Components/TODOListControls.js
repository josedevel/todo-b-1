import {connect} from 'react-redux';
import {todoListAdd} from '../actions/actions.js';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const mapStateToProps = state => {
  return {
    ...state.todoList
    }
};
  
const mapDispatchToProps = {
    todoListAdd
};

const TODOListControls = (props) => {

  const handleAdd = () => {

    const id = Math.floor(Math.random() * 100);
    const inputValue = document.getElementById('TODOListADD');
    const todoList = [];
    todoList.push({
        id: id,
        text: inputValue.value,
        checked: false,
        deleted: false
    });
    props.todoListAdd(todoList);
  };

  return (
    <div className="TODOListControls">
      <div>
          <label htmlFor="TODOListADD" style={{fontWeight: 'bold'}}>Title:</label> &nbsp;
          <input type={'text'} name='TODOListADD' id='TODOListADD' style={{width: '400px'}} /> &nbsp;
          {/*<button type="button" onClick={handleAdd} >ADD</button>*/}
      </div>
      <div style={{marginTop: '8px'}}>
        <Button variant="info" onClick={handleAdd} style={{width: '200px'}}>ADD <FontAwesomeIcon icon={faPlusCircle} /></Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOListControls);