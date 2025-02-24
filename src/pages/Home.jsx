
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home({setUserData}) {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ name, email ,Password});
    navigate('/about');  
  };

  return (
    <div>
      <h2>Home Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
            type="text"
            value={name} placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          
          <input
            type="email"
            value={email} placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
                    <input
            type="password"
            value={Password} placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    
  )
}

export default Home
