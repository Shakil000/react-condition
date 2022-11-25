import logo from './logo.svg';
import './App.css';
import User from './component/User/User';
import { useState } from 'react';

function App() {
  const [familiar,setFamiliar] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Is Familiar:{familiar.toString()}</h1>
        <button onClick={() => setFamiliar(!familiar)}>Click Me For Details</button>
        <User familiar={familiar}></User>
      </header>
    </div>
  );
}

export default App;
