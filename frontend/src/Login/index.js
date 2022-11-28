import React, { Component, useRef } from 'react'
import { Form } from 'react-router-dom'

export default class Login extends Component {
    // user = useRef()
    // pass = useRef()

    handleSubmit = () => {
        if (this.user && this.pass) {
            // localStorage.setItem()
        }
    }

    render() {
        return (
            <div>
                login
                {/* <Form onSubmit={this.handleSubmit}>

                </Form> */}
            </div>
        )
    }
}