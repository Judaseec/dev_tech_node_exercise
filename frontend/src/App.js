import React, { useEffect, useState } from 'react'
import {Route, Routes, NavLink} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Login from './Login'
import SignUp from './SignUp'
import Main from './Main';
import { isLoggedUser } from './Main/Helpers';
import Repositories from './Repositories';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [isLogged, setIsLogged] = useState(isLoggedUser())

  useEffect(() => {
    if (isLogged) {
      setIsLogged(true)
    }
  }, [isLogged]);

  const logOut = () => {
    localStorage.removeItem('current_user')
    localStorage.removeItem('repositories')
    localStorage.removeItem('favs')
    setIsLogged(isLoggedUser())
  }

  return (
      <div className='main'>
        <ToastContainer />
        <h1>NodeJS - Graphql - React</h1>
          {
            !isLogged ?
            <ul className='header'>
              <li><NavLink to='login' state= {{isLogged: isLogged}}>Login</NavLink></li>
              <li><NavLink to='sing-up'>Sign up</NavLink></li>
            </ul>
            :
            <ul className='header'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="repositories">View Repositories</NavLink></li>
              <li><NavLink to='login' onClick={logOut} className="log-out">Log out</NavLink></li>
            </ul>
          }
        
        <div className='content'>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='login' element={<Login />}/>
            <Route path='sing-up' element={<SignUp />}/>
            <Route path='repositories' element={<Repositories />}/>
          </Routes>
        </div>
      </div>
  )
}