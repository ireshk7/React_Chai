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
    <div className="fixed flex flex-wrap justify-center bottom-3 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 px-3 py-2 shadow-md rounded-xl ">
        <button
        onClick={()=>setColor("Red")}
        className="outline-2 px-10 py-8 rounded-sm" 
        style={{backgroundColor:"red"}}
        >red</button>
        <button
        onClick={()=>setColor("Green")}
        className="outline-2 px-10 py-8 rounded-sm" 
        style={{backgroundColor:"Green"}}
        >Green</button>
        <button
        onClick={()=>setColor("pink")}
        className="outline-2 px-10 py-8 rounded-sm" 
        style={{backgroundColor:"pink"}}
        >pink</button>
        <button
        onClick={()=>setColor("purple")}
        className="outline-2 px-10 py-8 rounded-sm" 
        style={{backgroundColor:"purple"}}
        >purple</button>
        <button
        onClick={()=>setColor("cyan")}
        className="outline-2 px-10 py-8 rounded-sm" 
        style={{backgroundColor:"cyan"}}
        >cyan</button>
        <button
        onClick={()=>setColor("#121212")}
        className="outline-2 px-10 py-8 rounded-sm" 
        style={{backgroundColor:"#121212"}}
        >dark</button>
        
        
      </div>
    </div>

    </div>
  )
}

export default App
