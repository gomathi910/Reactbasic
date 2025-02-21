import './App.css';
// import CreateContect from './CreateContect';
// import { useEffect } from 'react';
import NavBar from './componenets/NavBar';
 import Home from './pages/Home';
 import About from './pages/About';
 import Contact from './pages/Contact';
 import NotFound from './pages/NotFound';
import { Routes,Route } from 'react-router-dom';



 function App() {
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
 
 <NavBar></NavBar> 
  
   <Routes>
     <Route path ="/home" element = {<Home/>}></Route>
      <Route path ="/about" element = {<About/>}></Route>
      <Route path ="/contact" element = {<Contact/>}></Route>
      <Route path ='*' element = {<NotFound/>}></Route>
    </Routes>
    

    </>
  );
}

export default App



