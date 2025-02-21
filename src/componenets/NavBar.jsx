import {  NavLink } from "react-router-dom"
import React from "react"

function NavBar() {
  return (
<div className="navbar">
<div className="logo">gomathi tamtree</div>
    <ul>
      <NavLink to="/home">
      <li>Home</li>
      </NavLink>
      <NavLink to="/">
      <li>About</li>
      </NavLink>
      <NavLink to="/">
      <li>Contact</li>
      </NavLink>
</ul>
 
</div>
  )
}

export default NavBar




