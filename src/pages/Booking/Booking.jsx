import React, { useContext } from 'react'
import Navber from '../Shared/Navber/Navber'
import booking from '../../assets/Rectangle 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'

const Booking = () => {

    const navigator = useNavigate()



    return (
        <div className='bg-black/40 max-h-full md:h-auto bg-blend-multiply bg-cover'
            style={{ backgroundImage: `url(${booking})` }}>
            <Navber />

            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 w-full  gap-12 md:gap-32 pt-24 py-[156px] md:py-[260.5px] px-4'>
                <div className=' text-white col-span-2'>
                    <h2 className='text-8xl uppercase mb-10'>Cox's bazar</h2>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>

                </div>

                <div className=''>
                    <div className=" p-10 rounded-lg bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
                        <form className="">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Origin</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered " />
                            </div>

                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text">Destination</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered " />
                            </div>

                            <div className='flex gap-4'>
                                <div className="form-control w-36">
                                    <label className="label">
                                        <span className="label-text">From</span>
                                    </label>
                                    <input type="text" placeholder="" className="input input-bordered" />
                                </div>

                                <div className="form-control w-36">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input type="text" placeholder="" className="input input-bordered" />
                                </div>
                            </div>


                            <div className="form-control mt-6">
                                <Link to='/allHotel' ><button className="btn bg-yellow-500">Start Booking</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking