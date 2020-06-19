import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const { push } = useHistory();
  const [creds, setCreds] = useState({ username: '', password: ''})

  const changeHandler = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  };
  
  const submitHandler = e => {
    e.preventDefault();
    // make a post request to retrieve a token from the api
    axiosWithAuth().post('/api/login', creds)
      .then(res => {
        // handled the token
        localStorage.setItem('token', res.data.payload);
        // navigate to the BubblePage route
        push('/bubbles')

      })
      .catch(err => console.log(err))

  }
  
  return (

    <form onSubmit={submitHandler}>

      <h1>Welcome to the Bubble App!</h1>

      <input
        name='username'
        type='text'
        value={creds.username}
        onChange={changeHandler}
      />

      <input
        name='password'
        type='password'
        value={creds.password}
        onChange={changeHandler}
      />

      <button>Login</button>

    </form>

  )
}

export default Login;
