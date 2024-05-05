import React from 'react'

const Form1 = () => {
  return (
    <div>
    {/* input type is mandatory */}
   <input type="text"></input>
   <br></br>
   <input></input>
   <br></br>
   <input type="password"></input>
   <br></br>
   <input type="number"></input>
   <br></br>
   <input type="checkbox"></input>
   <br></br>
   <input type="radio"></input>
   <br></br>
   <input type="email"></input>
   <br></br>
{/* textarea doesnot have type */}
<textarea></textarea>
<br></br>
<select>
    <option>Nepal</option>
    <option>china</option>
    <option>india</option>
</select>


    </div>
  )
}

export default Form1