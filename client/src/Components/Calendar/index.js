import React from "react";


const index = (props) => {

  const firstOfTheMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), 1).getDay();
  const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const lastDayOfCurrentMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()+1, 0).getDate();
  let daysOfMonth = [];

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

    console.log('first ' + props.currentDate.getMonth());
    console.log('last ' + lastDayOfCurrentMonth);
  }

  const handlePrevClick = () => {
    const nextMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()-1, 1);
    props.setAppCurrentDate(nextMonth);
  }

  const handleNextCLick = (event) => {
    const nextMonth = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth()+1, 1);
    props.setAppCurrentDate(nextMonth);
  }
  
  fillDays();

  return (
    <React.Fragment>
      <a href="#" onClick={handlePrevClick}>Prev</a>
      Calendar {props.currentDate.toLocaleDateString()}
      <a href="#" onClick={handleNextCLick}>Next</a>
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
                return <td>{day}</td>
              })}
            </tr> )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default index;