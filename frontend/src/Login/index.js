import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { isLoggedUser } from '../Main/Helpers'

export default function Login() {
    const email = useRef('')
    const pass = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (isLoggedUser()) {
          navigate("/");
        }
      }, [navigate]);

    const handleSubmit = (event) => {
        event.preventDefault()
        if (email.current.value && pass.current.value) {
            let users = !localStorage.getItem('users') ? [] : JSON.parse(localStorage.getItem('users'))

            let currentUser = users.find((user) => {
                return user.email === email.current.value && user.pass === pass.current.value
            })
            
            if (!currentUser) {
                console.log('User no encontrado')
                return
            }

            localStorage.setItem('current_user', JSON.stringify(currentUser))
            
            if (location.state && location.state.isLogged) {
                location.state.isLogged = isLoggedUser()
            }
            // return navigate("/")
            window.location.reload()
        }
    }

    return isLoggedUser() ? null : (
        <div>
            {console.log(location.state)}
            <form onSubmit={handleSubmit}>
                <div>
                    <input id='email' name='email' placeholder='Email' type='text' ref={email} />
                </div>
                <div>
                    <input id='password' name='password' placeholder='Password' type='password' ref={pass} />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}