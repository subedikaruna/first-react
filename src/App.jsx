import College from "./component/College"
import Info from "./component/Info"
import Name from "./component/Name"
import LearnToUseMap from "./component/LearnToUseMap"
import LearnTernaryOperation from "./component/LearnTernaryOperation"
import DestructorPros from "./component/DestructorPros"
import LearnUseState1 from "./component/LearnUseState/LearnUseState1"
import ShowAndHideElement from "./component/LearnUseState/ShowAndHideElement"
import { useState } from "react"
import MyComponent from "./component/MyComponent"
import IncrementByChoice from "./component/IncrementByChoice"
import LearnButtonClick from "./component/LearnButtonClick"
import LearnInlineCss from "./component/Learncss/LearnInlineCss"
import LearnExternalCss from "./component/Learncss/LearnExternalCss"
import AppLinks from "./component/AppLinks"
import AppRoutes from "./component/AppRoutes"
import Home from "./component/Home"
import Contact from "./component/Contact"
import About from "./component/About"
import Form1 from "./component/learnForm/Form1"
import Form2 from "./component/learnForm/Form2"
import LearnUseReducer1 from "./component/LearnUseReducer/LearnUseReducer1"
import LearnUseReducer2 from "./component/LearnUseReducer/LearnUseReducer2"
import LearnUseReducer3 from "./component/LearnUseReducer/LearnUseReducer3"
import CreateStudent from "./component/CreateStudent"
import FormikForm from "./component/LearnFormik/FormikForm"
import CreateTeacher from "./component/CreateTeacher"
import ReadAllStudent from "./component/ReadAllStudent"
import ReadSpecificStudent from "./component/ReadSpecificStudent"

let App=()=>{
let[show,setShow]=useState(true)

  return(<div>
  {/* <h1 style={{backgroundColor:"red"}}>Heading 1</h1> */}
  {/* <img src="./vite.svg"></img> */}
  {/* <Name></Name> */}
  {/* <Info name="karuna" surname="subedi" 
  age={30}
  isMarried={false}
  list={[<div>Hello1</div>,<div>Hello2</div>]}
 father={{name:"harry",age:35}}
  ></Info> */}

  {/* <College name="Nagarjuna College" location="sankhamul" ></College> */}
 {/* <LearnToUseMap></LearnToUseMap> */}
 {/* <LearnTernaryOperation></LearnTernaryOperation> */}
 {/* <DestructorPros name="karuna" age={25}></DestructorPros> */}
 {/* <LearnUseState1></LearnUseState1> */}
 {/* <ShowAndHideElement></ShowAndHideElement> */}
{/* {show===true?<MyComponent></MyComponent>:null}
<button onClick={()=>{
  setShow(true)
 }}>Show</button>
 <button onClick={()=>{
  setShow(false)
 }}>Close</button> */}
 {/* <IncrementByChoice></IncrementByChoice> */}
 {/* <LearnButtonClick></LearnButtonClick> */}
 {/* <LearnInlineCss></LearnInlineCss> */}
 {/* <LearnExternalCss></LearnExternalCss> */}
 {/* <AppLinks></AppLinks>
 <AppRoutes></AppRoutes> */}
{/* <Form1></Form1> */}
{/* <Form2></Form2> */}
{/* <LearnUseReducer1></LearnUseReducer1> */}
{/* <LearnUseReducer2></LearnUseReducer2> */}
{/* <LearnUseReducer3></LearnUseReducer3> */}
{/* <CreateStudent></CreateStudent> */}
{/* <FormikForm></FormikForm> */}
{/* <CreateTeacher></CreateTeacher> */}
{/* <ReadAllStudent></ReadAllStudent> */}
{/* <ReadSpecificStudent></ReadSpecificStudent> */}
  </div> 

)} 



export default App
