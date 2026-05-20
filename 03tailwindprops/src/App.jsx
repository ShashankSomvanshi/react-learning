import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    name: "John Doe",
    age: 30
  }

  let newArray = [1,2,3,4,5];

  return (
    <>
    <h1 className='text-black text-center bg-green-400 p-4'>TailWind Test</h1>
      <Card username="John Doe" btnText="Click Me" />
      <Card username="Jane Smith" btnText="Visit Me" />
      
    </>
  )
}

export default App
