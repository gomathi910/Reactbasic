import React from 'react'



function About(userData) {
  
    if (!userData) {
        return <div>Please fill out the form on the Home page first.</div>;
      }
    
  return (
    <div>
    <h2>About Page</h2>
      <h3>User Details:</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>password : {userData.password}</p>
    </div>
)
}

export default About
