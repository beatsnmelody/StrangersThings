import React, { useState } from 'react';

const Signup = (props) => {
    const {
        userToken,
        setToken
    } = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = (event) => {
        setUsername(event.target.value)
    }
    const register = async (event) => {
        event.preventDefault()
        console.log(username)
        console.log(password)

        const rsp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT/users/register', {
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
        setToken(data.data.token);
        console.log("token", userToken)
        localStorage.setItem("token", userToken);
        setUsername("")
        setPassword("")
    }
    return (
        <div id='container'>
            <div id='navbar'>
                Make Your Account!!!
            </div>
            <form onSubmit={register}>
                <label htmlFor='username'>Make Username:</label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <label htmlFor='password'>Make Password:</label>
                <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type='submit'>Create Account!!!</button>
            </form>
        </div>
    )

}

export default Signup;