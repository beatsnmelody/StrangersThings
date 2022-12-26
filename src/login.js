import React, { useState } from 'react';

const Login = (props) => {
  const {
    userToken,
    setToken
  } = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async (event) => {
    event.preventDefault()
    console.log(username)
    console.log(password)

    const rsp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const data = await rsp.json()
    console.log("data", data)
    setToken(data.data.token);
    console.log("token", userToken)
    localStorage.setItem("token", userToken);
    setUsername("")
    setPassword("")
  }
  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div id='container'>
      <div id='navbar'>
        Welcome Back!!!
      </div>
      <form onSubmit={login}>
        <label htmlFor='username'>Username:</label>
        <input type='text' name='username' value={username} onChange={handleChange} />
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>Hello Again!!!</button>
      </form>
    </div>
  )

}

export default Login;