import {useEffect} from 'react';
import {connect} from 'react-redux';
import {todoListRequest} from '../actions/actions.js';
import TODOList from './TODOList.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
  return {
      // test
      ...state.todoList
    }
};

const mapDispatchToProps = {
  todoListRequest
};

const TODOListContainer = (props) => {

    useEffect(() => {
        props.todoListRequest();
    });

    const {todoLists} = props;

    return (
        <div>
            TODOs <FontAwesomeIcon icon={faClipboardCheck} />
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