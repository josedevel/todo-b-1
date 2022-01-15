import {useEffect} from 'react';
import {connect} from 'react-redux';
import {todoListRequest} from '../actions/actions.js';
import TODOList from './TODOList.js'

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
    //console.log(todoLists);

    return (
        <div>
            TODOs
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