import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import NavBar from './NavBar'
// import RefForm from './RefForm'
// import Compount from './Compount'

import {  Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import NavBar from './componenets/NavBar';
import { Provider } from './Provider';

function App() {
  const [userData, setUserData] = useState(null)

  return (
    <>
    {/* <div>
      <div className='card'>
        <img src="https://i.pinimg.com/736x/d7/52/f8/d752f8585e87ca2ade9501989583cb2c.jpg" alt="kurti" />
        <h1>kurti</h1>
        <p className='price'>Rs.800</p>
        <p>cotton kurti </p>
        <button >Add To Card</button>
      </div> */}
{/* <RefForm/>

    
    <NavBar/>
<Compount/> */}

<NavBar></NavBar>
<Routes>
        <Route path="/" element={<Home setUserData = {setUserData}/>} />
        <Route path="/about" element={<About userData = {userData} />} />
      </Routes>
      
    </>
  )
}

export default App
