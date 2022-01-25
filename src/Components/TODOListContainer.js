import {connect} from 'react-redux';
import {todoListRequest} from '../actions/actions.js';
import TODOList from './TODOList.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
  return {
      // the reducer
      ...state.todoList
    }
};

const mapDispatchToProps = {
  //todoListRequest
};

const TODOListContainer = (props) => {

  const {todoLists} = props;

  return (
    <div>
      TODOs <FontAwesomeIcon icon={faClipboardCheck} />&nbsp;<FontAwesomeIcon icon={faCoffee} />
      <div className='TODOListContainer'>
        {todoLists && todoLists.map(todoList => (  
          <TODOList data={todoList} key={todoList.id}>
            {/*todoList.text*/}
          </TODOList>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOListContainer);