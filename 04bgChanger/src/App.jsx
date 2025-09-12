import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full w-screen h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 rounded-xl ">
          <button
          onClick={()=>setColor("Red")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor:"Red"}}
          >Red</button>
          <button
          onClick={()=>setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor:"Blue"}}
          >Blue</button>
          <button
          onClick={()=>setColor("Green")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor:"Green"}}
          >Green</button>
          <button
          onClick={()=>setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor:"Yellow"}}
          >Yellow</button>
          
        </div>
      </div>

    </div>
  )
}

export default App
