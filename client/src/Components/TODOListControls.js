import {useState} from 'react';
import {connect} from 'react-redux';
import {todoListAdd, todoListAddAPI} from '../actions/actions.js';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const mapStateToProps = state => {
  return {
    ...state.todoList
    }
};
  
const mapDispatchToProps = {
  todoListAdd,
  todoListAddAPI
};

const TODOListControls = (props) => {

  const [text, setText] = useState('');
  const [priority, setPriority] = useState('test');

  const handleAdd = (event) => {

    const id = Math.floor(Math.random() * 100);
    const todoList = [];
    todoList.push({
        //id: id,
        text: text,
        checked: false,
        deleted: false,
        priority: priority,
        time: new Date().getTime()
    });
    props.todoListAddAPI(todoList);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  }

  return (
    <div className="TODOListControls">
      <div>
          <label htmlFor="TODOListADD" style={{fontWeight: 'bold'}}>Title:</label> &nbsp;
          <input type={'text'} name='TODOListADD' id='TODOListADD' style={{width: '400px'}} onKeyUp={handleTextChange} /> &nbsp;
      </div>
      <div style={{marginTop: '8px'}}>
        <label htmlFor="TODOListPRIORITY" style={{fontWeight: 'bold'}}>Priority:</label> &nbsp;
        <select style={{padding: '8px', width: '190px'}} id='TODOListPRIORITY' defaultValue='test' onChange={handlePriorityChange}>
          <option  value='test'>Select Priority</option>
          <option value='high'>High</option>
          <option value='medium'>Medium</option>
          <option value='low'>Low</option>
        </select>
        &nbsp;
        <Button 
          variant="info" 
          onClick={handleAdd} 
          style={{width: '190px', marginTop: '-3px'}} 
          id='TODOADDBtn' 
          disabled={(!text || priority==='test')}>
            ADD TODO <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOListControls);