import React, { useState } from "react";

const LearnUseState1 = () => {
    //let count=0
    //define variable in react using useState
    //define as[]=useState()
    let[count,setCount]=useState(0)
    console.log("i am component")
  return (
    <div>
  <p>Count is{count}</p>
 
  <button onClick={(e)=>{
    //count=count+1
    setCount(count+1)
  }}
  >
    Increment
  </button>
  <button onClick={(e)=>{
    //count=count-1
    setCount(count-1)
  }}
  >
  Decrement
  </button>
  {/* a component will render only if state variable changes */}
  <button onClick={()=>{
    setCount(0)
    //component will not render
  }}>Check</button>
    </div>
  );
};

export default LearnUseState1;
