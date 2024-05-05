import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = ({info}) => {
  let navigate=useNavigate()
  return (
    <div>
    <button onClick={()=>{
      navigate("/contact",{replace:true})
    }}>Change url to contact</button></div>
  )
}

//change url to "/contact"
export default About