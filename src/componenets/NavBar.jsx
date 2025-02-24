// import {  NavLink } from "react-router-dom"
// import React from "react"

// function NavBar() {
//   return (
//  <div className="navbar">
// <div className="logo">gomathi tamtree</div>
//     <ul>
//       <NavLink to="/home">
//       <li>Home</li>
//       </NavLink>
//       <NavLink to="/">
//       <li>About</li>
//       </NavLink>
//       <NavLink to="/">
//       <li>Contact</li>
//       </NavLink>
// </ul> 
 
//  </div>
//   )
// }

// export default NavBar






import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <nav className='navbar'>
  <Link to="/"><strong>Home</strong></Link> | <Link to="/about"><strong>About</strong></Link>
        </nav>
    </div>
  )
}

export default NavBar



