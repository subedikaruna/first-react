import React, { useState } from 'react'

const IncrementByChoice = () => {
    let [count,setCount]=useState(0)
  return (
    <div>count is{count}
    <button onClick={()=>{
        setCount(count+2)
    }

    }>Increment By 2</button>
    <button onClick={()=>{
        setCount(count+100)
    }

    }>Increment By 100</button>
    </div>
  )
}

export default IncrementByChoice