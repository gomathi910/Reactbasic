import React, { createContext, useContext, useState} from 'react'



const ThemeToggle = createContext();
export const ThemeProvider = () => useContext("ThemeToggle")

function CreateContect( children) {
    const [DarkMode, setDarkMode] = useState(() => {

  const savedTheme = localStorage.getItem('theme')
return savedTheme ? JSON.parse(savedTheme) :false;
});
  const toggleTheme = () => {
    const newTheme = !DarkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme',JSON.stringify(newTheme));
  };
 
    return (
    <div>
     <ThemeToggle value ={{DarkMode,toggleTheme}}>
      {children}
      </ThemeToggle>
    </div>
    
  )
}

export default CreateContect


