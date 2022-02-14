import React from "react";


const today = new Date();
const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const lastDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
const daysOfMonth = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
    [29,30,31]
]

const index = (props) => {

  //console.log(daysOfMonth)

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