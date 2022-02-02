import TODOListContainer from './Components/TODOListContainer.js'
import TODOListControls from './Components/TODOListControls.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TODO List APP
      </header>
      <div className='AppContainer'>
        <TODOListContainer>
          
        </TODOListContainer>
        <TODOListControls>

        </TODOListControls>
      </div>
    </div>
  );
}

export default App;
