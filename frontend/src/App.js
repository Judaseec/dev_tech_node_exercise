import React, { Component } from 'react'
import {Route, Link, Routes} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

import './App.css';

export default class App extends Component {
  MyRoute = () => {
    return <p>Hello!!</p>
  }

  render() {
    return (
        <div>
          <h1>Home Page</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='sing-up'>Sign up</Link></li>
          </ul>
          
          <div className='content'>
            <Routes>
              <Route path='/' />
              <Route path='login' element={<Login />}/>
              <Route path='sing-up' element={<SignUp />}/>
            </Routes>
          </div>
        </div>
    )
  }

  
}