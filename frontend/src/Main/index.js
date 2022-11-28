import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLoggedUser } from './Helpers';

export default function Main () {
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedUser()) {
          navigate("/login");
        }
      }, [navigate]);

    return (
        <div className='home'>
            <h2>Welcome to my APP</h2>
            <h4>This is a React App connected to NodeJS Backend API for query Github Graphql</h4>
        </div>
    )

}