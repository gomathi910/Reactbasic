import './App.css';
// import CreateContect from './CreateContect';
// import { useEffect } from 'react';
import NavBar from './componenets/NavBar';
 import Home from './pages/Home';
 import About from './pages/About';
 import Contact from './pages/Contact';
 import NotFound from './pages/NotFound';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';



 function App() {
  const [userData, setUserData] = useState(null)

//  const {DarkMode} = ("useTheme")

//   useEffect(() => {
//     if(DarkMode) {
//       document.body.classList.add('dark-mode');
//     }
//     else{
//       document.body.classList.remove('dark-mode')
//     }
//   },[DarkMode])

   return (
    <>
{/* //     <CreateContect/>
      <div className="App">
     <h1>Welcome to the Light/Dark Mode App</h1>
      </div>
  <CreateContect/> */}
 
 {/* <NavBar></NavBar> 
  
   <Routes>
     <Route path ="/home" element = {<Home/>}></Route>
      <Route path ="/about" element = {<About/>}></Route>
      <Route path ="/contact" element = {<Contact/>}></Route>
      <Route path ='*' element = {<NotFound/>}></Route>
    </Routes> */}
    

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
  );
}

export default App



