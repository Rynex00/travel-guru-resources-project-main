import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import navimg from '../../../assets/Group 1330.png'
import { AuthContext } from '../../../Providers/AuthProvider'

const Navber = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/news' >News</NavLink></li>
        <li><NavLink to='/destination' >Destination</NavLink></li>
        <li><NavLink to='/blog' >Blog</NavLink></li>
        <li><NavLink to='/contact' >Contact</NavLink></li>
    </>

    return (
        <div className='navbar absolute z-20 bg-black/20'>
            <div className=" container mx-auto ">
                <div className="flex justify-end gap-32 ">
                    <div className='w-72 '>
                        <img src={navimg} alt="" />
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm right-1 dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>

                </div>

                <div className="flex-none gap-2 mr-16 hidden lg:flex">
                    <div className="form-control text-white">
                        <input type="text" placeholder="Search" className=" py-2 p-2 rounded-md  bg-white/10 border  outline-none w-[450px] " />
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="flex justify-end menu menu-horizontal px-1 gap-3 font-semibold text-white">
                        {
                            links
                        }
                    </ul>
                    <div className='flex items-center'>
                        {
                            user ?
                                <div className="ml-8  ">
                                    <button onClick={handleSignOut} className=' py-2 px-4 btn rounded-md bg-yellow-500 text-white border-none'>Log Out</button>
                                </div>
                                :
                                <Link to='/login' className="ml-8 ">
                                    <button className=" btn py-2 px-5 rounded-md bg-yellow-500 text-white border-none">LogIn</button>
                                </Link>
                        }
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Navber