import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counterValue,setCounterValue] = useState(10);
  
  // let counterValue = 5;

  const addValue = () => {
    if(counterValue >= 20) {
      alert('Counter value cannot be greater than 20');
      return;
    }
    setCounterValue(counterValue + 1);
  }

  const subtractValue = () => {
    if(counterValue <= 0) {
      alert('Counter value cannot be less than 0');
      return;
    }
    setCounterValue(counterValue - 1);
  }

  return (
    <>
      <h1>Shashank Somanvanshi</h1>
      <h2>Counter Value : {counterValue}</h2>

      <button onClick={addValue}>Add Value {counterValue}</button>
      <br />
      <button onClick={subtractValue}>Subtract Value {counterValue}</button>

      <p>footer: {counterValue}</p>
    </>
  )
}

export default App
