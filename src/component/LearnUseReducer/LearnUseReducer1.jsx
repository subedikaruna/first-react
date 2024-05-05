import React, { useReducer } from 'react'

const LearnUseReducer1 = () => {
    let reducer=(state,action)=>{
        return `subedi${state}${action}`
    }
    let[name,dispatch]=useReducer(reducer,"karuna") 
     return (
    <div>{name}
    <button onClick={()=>{
        dispatch("aruna")
    }}> Change Name</button>
    
    </div>
  )
}

export default LearnUseReducer1