import React from 'react'
import { useState } from 'react'


function Counter() {
    let [count, setCount] = useState(0)
  const increaseCount = ()=>{
      setCount( count + 1 )
  }
  const decreaseCount = ()=>{
    if(count!=0) setCount( count - 1 )     
  }
  return (
    <div className="w-full h-screen display:flex place-items-center text-white">
      <h1>Incrementor aur Decrementor</h1>
      <br />
      <h1>{count}</h1>
      <br />
    <button  onClick={increaseCount}>Increase counter</button>
  
    <br/>
    <button onClick={decreaseCount}>Remove counter</button>
    </div>
  )
}

export default Counter
