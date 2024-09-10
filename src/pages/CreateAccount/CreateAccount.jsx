import React, { useContext } from 'react'
import Navber from '../Shared/Navber/Navber'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProvider';


const CreateAccount = () => {

    const navigate = useNavigate();
    const { createUser, GoogleUser, facebookUser } = useContext(AuthContext);


    const handelCreateAccount = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const firstname = form.get('firstName')
        const lastName = form.get('lastName')
        const email = form.get('email')
        const password = form.get('password')
        const comfirmPassword = form.get('comfirmPassword')

        console.log(firstname, lastName, email, password, comfirmPassword);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/logIn')
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleGoogle = () => {
        GoogleUser()
            .then()
            .catch()
    }
    const handleFacebook = () => {
        facebookUser()
            .then()
            .catch()
    }


    return (
        <div>
            <div className=''>
                <Navber />
                <div className="container mx-auto flex justify-center bg-white pt-32">
                    <div className=" flex-col lg:flex-row-reverse">
                        <div className="  w-[438px] border-2">
                            <form onSubmit={handelCreateAccount} className="card-body">
                                <h2 className='text-3xl font-bold py-4'>Create an account</h2>

                                <div className="form-control py-2">
                                    <input type="text" name='firstName' placeholder="First Name" className="outline-none border-b-2 border-b-black/20 py-2" />
                                </div>
                                <div className="form-control py-2">
                                    <input type="text" name='lastName' placeholder="Last Name" className="outline-none border-b-2 border-b-black/20 py-2" />
                                </div>
                                <div className="form-control py-2">
                                    <input type="email" name='email' placeholder="Username or Email" className="outline-none border-b-2 border-b-black/20 py-2" />
                                </div>
                                <div className="form-control py-2">
                                    <input type="password" name='password' placeholder="Passowrd" className="outline-none border-b-2 border-b-black/20 py-2" />
                                </div>
                                <div className="form-control py-2">
                                    <input type="password" name='comfirmPassword' placeholder="Confrim Passowrd" className="outline-none border-b-2 border-b-black/20 py-2" />
                                </div>

                                <div className=" form-control mt-6 mb-3">
                                    <button className="btn p-3 text-white font-bold w-full bg-yellow-500">Create an account</button>
                                </div>
                                <p className=' text-center' >Already have an account? <Link to='/logIn' className='text-yellow-500 font-semibold'> Login</Link></p>
                            </form>
                        </div>
                        <div className="divider">OR</div>

                        <div className='space-y-3'>
                            <div onClick={handleFacebook} className='btn flex items-center border justify-center gap-4 font-semibold p-2 rounded-3xl'>
                                <FaFacebook className='text-blue-500 text-4xl' />
                                <button className=''>Continue with Facebook</button>
                            </div>
                            <div onClick={handleGoogle} className='btn flex items-center border justify-center gap-4 font-semibold p-2 rounded-3xl'>
                                <FcGoogle className=' text-4xl' />
                                <button className=''>Continue with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount