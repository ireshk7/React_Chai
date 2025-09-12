import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  // let myObj = {
  //   username:"Iresh",
  //   age:21
  // }

  // let myArr =[1,2,3];


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
    <Card username="chaibro" btnText="Click me" />
    <Card username="iresh" />
    </>
  )
}

export default App
