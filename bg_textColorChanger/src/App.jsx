import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const [textcolor, setTextColor] = useState("black")

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color, color:textcolor}}>
        <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-2" >
          <h3>Background Color</h3>
          <div className="flex flex-wrap justify-center rounded-3xl shadow-lg bg-white px-2 py-2 gap-3">
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="px-3 py-2 rounded-3xl outline" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"black",color:"white"}} onClick={()=>setColor("black")}>Black</button>
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"green"} } onClick={()=>setColor("green")}>Green</button>
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          </div>
        </div>

        <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-24" >
          <h3>Text Color</h3>
          <div className="flex flex-wrap justify-center rounded-3xl shadow-lg bg-white px-2 py-2 gap-3">
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"red"}} onClick={()=>setTextColor("red")}>Red</button>
            <button className="px-3 py-2 rounded-3xl outline" style={{backgroundColor:"white"}} onClick={()=>setTextColor("white")}>White</button>
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"black",color:"white"}} onClick={()=>setTextColor("black")}>Black</button>
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"green"} } onClick={()=>setTextColor("green")}>Green</button>
            <button className="px-3 py-2 rounded-3xl" style={{backgroundColor:"blue"}} onClick={()=>setTextColor("blue")}>Blue</button>
          </div>
        </div>
      </div>
  )
}

export default App
