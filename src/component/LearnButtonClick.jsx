import React from 'react'

const LearnButtonClick = () => {
    let handleClick=()=>{
        console.log("button is clicked")
    }
    let handleClick1=()=>{
        return()=>{
            console.log("button is clicked")
        }
       
    }
  return (
    <div>
    {/* <button onClick={()=>{
        console.log("hello")
    }}>Click Me</button>
     */}
    
    {/* <button
    onClick={handleClick}>Click Me</button> */}

 <button style={{cursor:"pointer",color:"red"}}
    onClick={handleClick1()}>Click Me</button>


    </div>
  )
}

export default LearnButtonClick