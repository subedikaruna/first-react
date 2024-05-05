import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ReadAllStudent = () => {
   let[students,setStudents]=useState([])
   let navigate=useNavigate()
    /*
    hit api on page load
    api gives data
    set data to state variable
    display data
    */
   let getData=async()=>{
    try {
      let result=await axios({
        url:"http://localhost:8000/students",
        method:"get",
      })
      setStudents(result.data.result)
    } catch (error) {
      
    }
   }
   useEffect(()=>{
    getData()
   },[])
  return (
    <div>{students.map((item,i)=>{
        return (
            <div key={i} style={{border:"solid red 3px",margin:"10px"}}>
            <p>name is {item.name}</p>
            <p>age is {item.age}</p>
            <p>isMarried is {item.isMarried===true?"yes":"no"}</p>
            <button onClick={()=>{
              navigate(`/student/${item._id}`)
            }}>View</button>
            <button>Edit</button>
            <button onClick={async()=>{
              let result=await axios({
                url:`http://localhost:8000/${item._id}`,
              method:"delete",
              })
            }}>Delete</button>
            </div>
        )
    })}
    </div>
  )
}

export default ReadAllStudent