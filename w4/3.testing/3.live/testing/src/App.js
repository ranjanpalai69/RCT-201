
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';


function App() {
  const[count,setCount]=useState(0);
  return (
    <div className="App">
         <h1>Simple Unit Testing</h1>
         <h3 data-testid="counter">{count}</h3>
         <Button count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
