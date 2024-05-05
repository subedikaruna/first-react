import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import LearnDynamic from './LearnDynamic'
import Bike from './Bike'
import CreateBike from './CreateBike'
import CreateProduct from './CreateProduct'
import Product from './Product'

//attach component with url
const AppRoutes = () => {
  return (
    <div>
    <Routes>
   <Route path="/" element={<Home name="hetauda"></Home>}></Route>
   <Route path="/:id/name/:id1" element={<LearnDynamic></LearnDynamic>}></Route>
   <Route path="/contact" element={<Contact number={9845995977}></Contact>}></Route>
   <Route path="/about" element={<About info= "developer"></About>}></Route>

 <Route path="/bike" element={<Bike></Bike>}></Route>
 <Route path="/bike/create" element={<CreateBike></CreateBike>}></Route>
 <Route path="/product" element={<Product></Product>}></Route>
 <Route path="/product/create" element={<CreateProduct></CreateProduct>}></Route>
 <Route path="/*" element={<div>Page not available</div>}></Route>
   {/* component will execute if the route is other than defined route */}
   <Route path="/students/create" element ={<CreateStudent></CreateStudent>}></Route>
    </Routes>
    </div>
  )
}



/* =>alt +shift+a */
/* localhost:5173=>This is Home Page
localhost:5173/contact=>This is Contact Page
localhost:5173/about=>This is About Page
*/
export default AppRoutes


// url= localhost:5173/a/b/c/d?name=karuna&age=30&isMarried=false
// url=route?query
// route=baseurl/params1/parmas2/params3/params4
// query=name=karuna&age=30&isMarried=false