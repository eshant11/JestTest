import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';


function App() {
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);
  console.log(count);
  const handleDecrement = () => {
    count <= 0 ? setIsError(true) : setCount((pCount) => { return pCount - 1 })
  }
  const handleIncrement = () => {
    if (count >= 0) {
      setIsError(false);
      setCount((prevCount) => prevCount + 1)
    }
  }

  return (
    <div data-test='component-App' className="App">
      <h1 data-test='counter-display'>The counter is currently &nbsp;
        <span data-test='count' >{count}</span>
        <br />
        <span data-test='err-msg' className={`error ${isError ? '' : 'hidden'}`} style={isError ? { color: 'red' } : { display: 'none' }}>The count can not be less than 0.</span>

      </h1>
      <button data-test='increment-button' onClick={handleIncrement}>Increase</button>
      <button data-test='decrement-button' onClick={handleDecrement}>Decrease</button>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
