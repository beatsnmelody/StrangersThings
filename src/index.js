import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Login from './login.js';
import Signup from './signup.js';
import Homepage from './post.js';

const App = () => {
  const [userToken, setToken] = useState('');
  return (<div>
    <BrowserRouter>
      <div id='navbar'>
        <NavLink exact to="/">New Lovely Postings</NavLink>
        <NavLink to="/signup"> Join Us!!! </NavLink>
        <NavLink to="/login"> Welcome Back!!! </NavLink>
      </div>
      <div id='main-section'>
        <Switch>
          <Route exact path="/">
          <Homepage setToken={setToken}
          userToken={userToken}/>
          </Route>
          <Route path="/signup">
          <Signup setToken={setToken}
          userToken={userToken}/>
          </Route>
          <Route path="/login">
          <Login setToken={setToken}
          userToken={userToken}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter >
  </div >)
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);