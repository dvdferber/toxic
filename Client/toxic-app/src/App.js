import {BrowserRouter} from 'react-router-dom'
import MainComponent from './component/MainComponent'
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent/>
      </div>
    </BrowserRouter>
  );
}

export default App;
