import { useState } from "react";
import { useRef } from "react"
import Ur from "./Components/Ur"
import'./CSS/Ur.css'

const App = () => {

  const [data,setData] = useState([]);
  const inputRef = useRef(null);

  return (
    <div className="useref">
      <div className="ur-header">Use-Ref</div>
      <input ref={inputRef} type="text"/>
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
    </div>
  )
}

export default App
