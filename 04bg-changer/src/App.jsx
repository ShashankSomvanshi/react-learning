import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>


        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-4 py-2'>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red",cursor:"pointer"}} onClick={()=>setColor('red')}>Red</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue",cursor:"pointer"}} onClick={()=>setColor('blue')}>Blue</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green",cursor:"pointer"}} onClick={()=>setColor('green')}>Green</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow",cursor:"pointer"}} onClick={()=>setColor('yellow')}>Yellow</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple",cursor:"pointer"}} onClick={()=>setColor('purple')}>Purple</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink",cursor:"pointer"}} onClick={()=>setColor('pink')}>Pink</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"gray",cursor:"pointer"}} onClick={()=>setColor('gray')}>Gray</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"teal",cursor:"pointer"}} onClick={()=>setColor('teal')}>Teal</button>
                <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"indigo",cursor:"pointer"}} onClick={()=>setColor('indigo')}>Indigo</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
