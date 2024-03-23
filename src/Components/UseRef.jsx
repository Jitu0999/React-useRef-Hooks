import { useState } from "react";
import { useRef } from "react"
import'./CSS/UseRef.css'
import UseRefItems from './UseRefItems';

const App = () => {

  const [data,setData] = useState([]);
  const inputRef = useRef(null);

  return (
    <div className="us-ref">
      <div className="us-ref-header">Use-Ref</div>
      <input ref={inputRef} type="text"/>
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
    </div>
  )
}

export default App