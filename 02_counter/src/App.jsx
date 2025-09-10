import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  const addValue = () => {
    if(counter<20){
      setCounter(prevCounter => prevCounter+1)  
      setCounter(prevCounter => prevCounter+1)  
      setCounter(prevCounter => prevCounter+1)  
      setCounter(prevCounter => prevCounter+1)  
    }
    else{
      setCounter(counter);
    }
    console.log("Clicked :",Math.random());  
  }

  const removeValue = () => {
    if(counter!=0){
      setCounter(counter-1)
    }
    
    
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addValue}

    >Add Value:{counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
