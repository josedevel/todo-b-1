import React from "react";


const today = new Date();
const firstOfTheMonth = new Date(today.getFullYear(), today.getMonth()+1, 1).getDay();
const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const lastDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
let daysOfMonth = [];

const test = () => {
    let j = 0;
    let row = [];
    let k = 0;
    let p = 1;
    for(let i=0; i<(lastDayOfCurrentMonth+firstOfTheMonth); i++){
        row[k] = (i>=firstOfTheMonth)? p++ : '';
        k++;
        if(/*i>0 &&*/ k%7 === 0){
            daysOfMonth[j] = row;
            j++;
            row = [];
            k = 0;
        }
    }
    daysOfMonth[j] = row;
}

const index = (props) => {

  test();
  console.log(firstOfTheMonth);

  return (
    <React.Fragment>
      Calendar {props.currentDate.toLocaleDateString()}
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