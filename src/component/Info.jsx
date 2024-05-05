import React from 'react'

const Info = (props) => {
  console.log(props)
  console.log("karuna")
 let address="hetauda"
 let country="nepal"
  return (
    <div>
    <p>country is {country}</p>
     <p>address is {address}</p>
     <p>name is {props.name}</p>
     <p>surname is {props.surname}</p>
     <p> father name is {props.father.name}</p>
     <p>is Married is &nbsp;
     {props.isMarried===true?"yes":"no"
     }</p>
     <p>list is {props.list}</p>
     </div>
  )
}

export default Info