import React, { useState } from 'react'

const ShowAndHideElement = () => {
    let[show,setShow]=useState(true)
  return (
    <div>
     {show===true?<img src="./vite.svg" alt="" ></img>:null}
    <button onClick={()=>{
        setShow(true)
    }}>Show</button>
  
    <button onClick={()=>{
        setShow(false)
    }}>Hide</button>

   
    </div>
  )
}

export default ShowAndHideElement