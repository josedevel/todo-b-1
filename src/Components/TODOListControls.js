import {connect} from 'react-redux';
import {todoListAdd} from '../actions/actions.js';


const mapStateToProps = state => {
  return {
    // test
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
    todoList[id] = {
        id: id,
        text: inputValue.value,
        checked: false,
        deleted: false
    };
    props.todoListAdd(todoList);
  };

  return (
    <div className="TODOListControls">
        <div>
        Controls: &nbsp;
        <input type={'text'} name='TODOListADD' id='TODOListADD' /> &nbsp;
        <button type="button" onClick={handleAdd} >ADD</button>
        </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOListControls);