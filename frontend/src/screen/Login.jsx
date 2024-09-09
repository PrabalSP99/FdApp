import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Login() {

  const [data, setdata] = useState({
    email: '', password: ''
  })

  const navigate = useNavigate();

  // render the data to the bckend  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://temporary-five.vercel.app/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: data.email, password: data.password })
    })

    const json =  response.json();

    if (!json.success) {
      alert("Enter valid credentials");
    }
    else{
      localStorage.setItem('userEmail',data.email);
      localStorage.setItem('authtoken',json.token);
      navigate('/');
    }
    
  }

  function handle(event) {
    const { name, value } = event.target;
    setdata((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
     
  <div className="bg-blue-100 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
  <img className="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
  <form onSubmit={handleSubmit} className="mt-8 mb-4">
    <div className="mb-4">
      <label for="userEmail" className="sr-only">Email address</label>
      <input className="border-solid border border-gray-400 rounded px-2 py-3" name='email' value={data.email} onChange={handle} type="email" id="userEmail" placeholder="Email address" required />
    </div>
    <div>
      <label for="userEmail" className="sr-only">Password</label>
      <input className="border-solid border border-gray-400 rounded px-2 py-3" name='password' value={data.password} onChange={handle} type="password" id="userPass" placeholder="Password" required />
    </div>
    <div className="my-4 flex items-center">
      <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
      <label for="userRemember">Remember me</label>
    </div>
    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in</button>
  </form>
  <div className='flex '>
  <Link to='/signup' classNameName='flex mx-4'> Not a user?</Link>
  <Link to="#" className="flex mx-2">Forgot the password?</Link>
  </div>
</div>
  )
}

export default Login;

