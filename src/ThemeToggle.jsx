import React from 'react'
import {useTheme} from './context/CreateContect'

function ThemeToggle() {
    const [Darkmode,toggleTheme ] = useTheme();
  return (
    <>
    <button onClick={toggleTheme}>
        {Darkmode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>  
    </>
  )
}

export default ThemeToggle


