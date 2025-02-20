import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateContect from './CreateContect'




function App() {
 const {DarkMode} = useTheme()
  useEffect(() => {
    if(DarkMode) {
      document.body.classList.add('dark-mode');
    }
    else{
      document.body.classList.remove('dark-mode')
    }
  },[DarkMode])

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
 <CreateContect/>
      <div className="App">
    <h1>Welcome to the Light/Dark Mode App</h1>
      </div>
  <CreateContect/>
 
    
    </>
  )
}

export default App
