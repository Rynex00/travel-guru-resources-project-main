import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/Choppr.png'

function ErrorPages() {

    const error = useRouteError();
    console.error(error)

    return (
        <div className='text-center text-3xl mt-16'>
            <div className='flex justify-center'>
                <img src={errorImg} alt="" />
            </div>
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {
                        error.statusText || error.message
                    }
                </i>
            </p>
            <Link to="/"><button className='btn mt-5'> Go to Home </button></Link>
        </div>
    )
}

export default ErrorPages