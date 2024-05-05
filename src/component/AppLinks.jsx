import React from 'react'
import { NavLink } from 'react-router-dom'

const AppLinks = () => {
  return (
    <div>
    <NavLink to="/" style={{marginRight:"20px"}}>Home</NavLink>
    <NavLink to="/contact" style={{marginRight:"20px"}}>Contact</NavLink>
    <NavLink to="/about" style={{marginRight:"20px"}}>About</NavLink>
    <NavLink to="/bike" style={{marginRight:"20px"}}>Bikes</NavLink>
    <NavLink to="/bike/create" style={{marginRight:"20px"}}>Create Bike</NavLink>
    <NavLink to="/product" style={{marginRight:"20px"}}>Product</NavLink>
    <NavLink to="/product/create" style={{marginRight:"20px"}}>Create Product</NavLink>
    </div>
  )
}

export default AppLinks
/*
home=>localhost:5173
contact=>localhost:5173/contact
about=>localhost:5173/about
*/