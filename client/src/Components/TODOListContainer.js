import {useEffect} from 'react';
import {connect} from 'react-redux';
import TODOList from './TODOList.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import {todoListFetch} from '../actions/actions.js';

const mapStateToProps = state => {
  return {
      // the reducer
      ...state.todoList
    }
};

const mapDispatchToProps = {
  todoListFetch
};

const TODOListContainer = (props) => {

  const {todoLists} = props;

  useEffect(() => 
  {
    props.todoListFetch();
  }, []);

  return (
    <div>
      TODOs <FontAwesomeIcon icon={faClipboardCheck} />&nbsp;<FontAwesomeIcon icon={faCoffee} />
      <div className='TODOListContainer'>
        {todoLists && todoLists.map(todoList => (  
          <TODOList data={todoList} key={todoList._id}>
            {/*todoList.text*/}
          </TODOList>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOListContainer);