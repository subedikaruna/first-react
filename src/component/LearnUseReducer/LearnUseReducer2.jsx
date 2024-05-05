import React, { useReducer } from 'react'
//rendering on useReducer
//useState =>component will render when state variable changes 
//useReducer =>component will render when dispatch is called
const LearnUseReducer2 = () => {
    let reducer=(state,action)=>{
        return state+1
    }
    let[state,dispatch]=useReducer(reducer,0) 
  return (
    <div>{state}
    <br></br>
    <button onClick={()=>{
        dispatch()
    }}> Increment</button>
    
    </div>
  )
}

export default LearnUseReducer2