import React from 'react'
import { useParams } from 'react-router-dom'

const LearnDynamic = () => {
    let params=useParams()
    console.log(params)
    //it gives dynamic params in object
  return (
    <div>LearnDynamic</div>
  )
}

export default LearnDynamic