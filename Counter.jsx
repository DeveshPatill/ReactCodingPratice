import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
  return (
    <div>
        <h3>Counter machine</h3>
        
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>

        <h2>{count}</h2>

        
    </div>
  )
}

export default Counter