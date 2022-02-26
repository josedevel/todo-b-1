import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Button from "react-bootstrap/esm/Button";
import {connect} from 'react-redux';
import {todoListFetch} from '../../actions/actions.js';

const mapStateToProps = state => {
    return {
        // the reducer
        ...state.todoList
      }
  };
  
  const mapDispatchToProps = {
    todoListFetch
  };


const index = (props) => {

  const firstOfTheMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), 1).getDay();
  const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const lastDayOfCurrentMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()+1, 0).getDate();
  let daysOfMonth = [];
  const currentMonth = new Date().getMonth()+1;

  const fillDays = () => {
    let j = 0;
    let row = [];
    let k = 0;
    let p = 1;
    for(let i=0; i<(lastDayOfCurrentMonth+firstOfTheMonth); i++){
        row[k] = (i>=firstOfTheMonth)? p++ : '';
        k++;
        if(k%7 === 0){
            daysOfMonth[j] = row;
            j++;
            row = [];
            k = 0;
        }
    }
    daysOfMonth[j] = row;
  }

  const handlePrevClick = () => {
    const nextMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()-1, 1);
    props.setAppCurrentDate(nextMonth);
  }

  const handleNextCLick = (event) => {
    const nextMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()+1, 1);
    props.setAppCurrentDate(nextMonth);
  }

  const handleDayClick = (event) => {
      const queryDate = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), event.target.id);
      props.setAppCurrentDate(queryDate);
      props.todoListFetch(queryDate.toLocaleDateString());
  }
  
  fillDays();

  return (
    <React.Fragment>
      <Button onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </Button>
      Calendar {props.currentDate.toLocaleDateString()}
      <Button onClick={handleNextCLick}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </Button>
      <table style={{margin: 'auto', width:'100%'}}>
        <thead>
          <tr>
            {weekdaysShort.map(day => {
              return (
                <th>
                  {day}
                </th>
              )  
            })}
          </tr>
        </thead>
        <tbody>
          {daysOfMonth.map(week => {
            return ( <tr>
              {week.map(day => {
                return <td className={((props.currentDate.getDate() === day) && ((props.currentDate.getMonth()+1) === currentMonth))? 'CalendarToday' : ''}  >
                    <a href="javascript:void(0);" style={{textDecoration: 'none'}} id={day} onClick={handleDayClick}>{day}</a>
                  </td>
              })}
            </tr> )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

//export default index;
export default connect(mapStateToProps, mapDispatchToProps)(index);