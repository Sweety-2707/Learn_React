import { useState } from 'react'
import './App.css'
import {connection} from '../connection'


function App() {

  connection().then(() =>
    console.log("mongoDB Connected!")
  );

  return (
    <>
    </>
  )
}

export default App
