import React, { useState } from 'react'

const Form2 = () => {
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[email,setEmail]=useState("")
    let[address,setAddress]=useState("")
    let[password,setPassword]=useState("")
    let[description,setDescription]=useState("")
    let[gender,setGender]=useState("female")
    let[country,setCountry]=useState("usa")
    let[isMarried,setIsMarried]=useState("false")
   
    let genders = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ];
      let countries = [
        { label: "Nepal", value: "nepal" },
        { label: "India", value: "india" },
        { label: "USA", value: "usa" },
        { label: "Germany", value: "germany" },
        { label: "Uk", value: "uk" },
      ];

  return (
    <div>
    <form onSubmit={(e)=>{
   e.preventDefault()
   console.log("form is submitted")
   let data={
    name:name,
    age:age,
    address:address,
    email:email,
    password:password,
    description:description,
    gender:gender,
    country:country,
    isMarried:isMarried
   }
   console.log(data)
    }}>
<div>
    <label htmlFor="name">Name</label>
    <input 
    id="name" 
    type="text"
    value={name}
    onChange={(e)=>{
setName(e.target.value)
    }}></input>
</div>
<div>
    <label htmlFor="age">Age</label>
    <input
     id="age" 
     type="number"
     value={age}
    onChange={(e)=>{
setAge(e.target.value)
    }}></input>
</div>
<div>
    <label htmlFor="address">Address</label>
    <input 
    id="address" 
    type="text"
    value={address}
    onChange={(e)=>{
setAddress(e.target.value)
    }}></input>
</div>
<div>
    <label htmlFor="email">Email</label>
    <input 
    id="email" 
    type="email"
    value={email}
    onChange={(e)=>{
setEmail(e.target.value)
    }}></input>
</div>
<div>
    <label htmlFor="password">Password</label>
    <input 
    id="password" 
    type="password"
    value={password}
    onChange={(e)=>{
setPassword(e.target.value)
    }}></input>
</div>
<div>
    <label htmlFor="description">Description</label>
    <textarea
    id="description" 
  
    value={description}
    onChange={(e)=>{
setDescription(e.target.value)
    }}></textarea>
</div>
<div>
    <label>Gender:</label>
    {genders.map((item,i)=>{
        //item={label:"Male",value:"male"}
        return(
            <span key={i}>
          <label htmlFor={item.value}>{item.label}</label>
          <input
            id={item.value}
            type="radio"
            checked={gender===item.value}
            value={item.value}
            onChange={(e)=>{
                setGender(e.target.value)}}
        ></input>
            </span>
          )      
    })}
</div>
<div>
    <label>Countries</label>
    <select value={country}
      onChange={(e)=>{
                setCountry(e.target.value)}}
    >
    {countries.map((item,i)=>{
        //item={label:"USA",value:"usa"}
        return<option key={i} value={item.value}>{item.label}</option>
     })}
       </select>
</div>

<div>
    <label htmlFor="isMarried">isMarried</label>
    <input
           
            type="checkbox"
            id="isMarried"
            checked={isMarried===true}
         
            onChange={(e)=>{
                setIsMarried(e.target.checked)}}
        ></input>
</div>


{/* <div>
    <label>
        Country
    </label>
    <select 
    value={country}
    onChange={(e)=>{
        setCountry(e.target.value)
    }}
    
    >
        <option value="nepal">Nepal</option>
        <option value="china">China</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
    </select>
</div> */}
{/* <div>
Gender &nbsp;
    <label htmlFor="male">Male</label>
    <input 
    id="male" 
    type="radio"
    value="male"
    checked={gender==="male"}
    onChange={(e)=>{
setGender(e.target.value)
    }}></input>
    <label htmlFor="female">Female</label>
    <input 
    id="female" 
    type="radio"
    value="female"
    checked={gender==="female"}
    onChange={(e)=>{
setGender(e.target.value)
    }}></input>
    <label htmlFor="other">Other</label>
    <input 
    id="other" 
    type="radio"
    value="other"
    checked={gender==="other"}
    onChange={(e)=>{
setGender(e.target.value)
    }}></input>
</div> */}
<button type="submit">Next</button>
    </form></div>
  )
}

export default Form2