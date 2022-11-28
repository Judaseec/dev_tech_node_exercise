import React, { useRef } from 'react'

export default function SignUp() {
    const email = useRef('')
    const githubUser = useRef('')
    const pass = useRef('')

    const handleSubmit = (event) => {
        event.preventDefault()
        let users = !localStorage.getItem('users') ? [] : JSON.parse(localStorage.getItem('users'))

        if(email.current.value && pass.current.value && githubUser.current.value) {
            let newUser = {
                email: email.current.value,
                pass: pass.current.value,
                githubUser: githubUser.current.value
            }
            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))

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