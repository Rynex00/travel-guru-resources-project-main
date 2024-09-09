import React from 'react'
import Navber from '../Shared/Navber/Navber'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";



const LogIn = () => {

    const handleLogIn = e => {

    }

    return (
        <div className=''>
            <Navber />
            <div className="container mx-auto flex justify-center bg-white pt-32">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="  w-[438px] border-2">
                        <form className="card-body">
                            <h2 className='text-3xl font-bold py-4'>Login</h2>

                            <div className="form-control py-4">
                                <input type="email" placeholder="Username or Email" className="outline-none border-b-2 border-b-black/20 py-2" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Passowrd" className="outline-none border-b-2 border-b-black/20 py-2" required />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <input type="checkbox" name='terms' id='terms' />
                                    <label className="ml-1" htmlFor="terms">Remember Me</label>
                                </div>
                                <label className="label ">
                                    <a href="#" className="label-text-alt text-yellow-500 underline link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6 mb-3">
                                <button className="p-3 text-white font-bold w-full bg-yellow-500">Login</button>
                            </div>
                            <p className='text-center' >Don’t have an account? <Link to='/createAccount' className='text-yellow-500 font-semibold'>Create an account</Link></p>
                        </form>
                    </div>
                    <div className="divider">OR</div>

                    <div className='space-y-3'>
                        <div className='flex items-center border justify-center gap-4 font-semibold p-2 rounded-3xl'>
                            <FaFacebook className='text-blue-500 text-4xl' />
                            <button className=''>Continue with Facebook</button>
                        </div>
                        <div className='flex items-center border justify-center gap-4 font-semibold p-2 rounded-3xl'>
                            <FcGoogle className=' text-4xl' />
                            <button className=''>Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn