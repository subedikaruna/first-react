import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Contact = ({number}) => {
  //let {naame,setName}=useState()
  let [query]=useSearchParams()
  console.log(query.get("age"))
  console.log(query.get("isMarried"))

  //everything in query are string
  return (
    <div>My Contact Number is{number}</div>
  )
}

export default Contact