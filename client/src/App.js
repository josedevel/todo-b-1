import {useState} from 'react';
import TODOListContainer from './Components/TODOListContainer.js'
import TODOListControls from './Components/TODOListControls.js'
import Calendar from './Components/Calendar/index.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [currentDate, setCurrentDate] = useState(new Date('01/01/2022'));

  const setAppCurrentDate = (currentDate) => {
    setCurrentDate(currentDate);
  }

  return (
    <div className="App">
      <header className="App-header">
        TODO List APP
      </header>
      <div className='AppContainer'>
        <TODOListContainer currentDate={currentDate}>
          
        </TODOListContainer>
        <TODOListControls currentDate={currentDate}>

        </TODOListControls>
        <Calendar currentDate={currentDate} setAppCurrentDate={setAppCurrentDate}>

        </Calendar>
      </div>
    </div>
  );
}

export default App;
