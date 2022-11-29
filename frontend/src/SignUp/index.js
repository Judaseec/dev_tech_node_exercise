import React, { useRef } from 'react'
import { validateEmail } from '../Main/Helpers'
import { toast } from 'react-toastify';

export default function SignUp() {
    const email = useRef('')
    const githubUser = useRef('')
    const pass = useRef('')

    const validateForm = () => {
        if (!email.current.value || !pass.current.value || !githubUser.current.value) {
            toast.error("All inputs are required");
            return false
        }

        if (validateEmail(email.current.value)) {
            toast.error(validateEmail());
            return false
        }

        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!validateForm()) {
            return
        }

        let users = !localStorage.getItem('users') ? [] : JSON.parse(localStorage.getItem('users'))

        if(email.current.value && pass.current.value && githubUser.current.value) {
            let newUser = {
                email: email.current.value,
                pass: pass.current.value,
                githubUser: githubUser.current.value
            }
            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))
            toast.success('New user added successfully')

            event.target.reset()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input id='email' name='email' placeholder='Email' type='text' ref={email} />
                </div>
                <div>
                    <input id='password' name='password' placeholder='Password' type='password' ref={pass} />
                </div>
                <div>
                    <input id='github_user' name='github_user' placeholder='Github User' type='text' ref={githubUser} />
                </div>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}