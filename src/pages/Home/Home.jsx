import React from 'react'
import homeimg from '../../assets/Rectangle 1.png'
import Navber from '../Shared/Navber/Navber'
import { FaArrowRightLong } from "react-icons/fa6";
import HomePagesCard from '../Shared/HomePagesCard/HomePagesCard'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-black/40 max-h-full md:h-auto bg-blend-multiply bg-cover'
            style={{ backgroundImage: `url(${homeimg})` }}>
            <Navber />

            <div className='max-w-[1504px] mx-auto grid grid-cols-1 md:grid-cols-2 w-full  gap-12 md:gap-32 pt-24 py-[156px] md:py-[203px] px-4'>
                <div className=' text-white'>
                    <h2 className='text-8xl uppercase mb-10'>Cox's bazar</h2>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to='/booking' ><button className='flex items-center gap-3 mt-5 py-2 px-4 bg-yellow-500'> Booking <FaArrowRightLong /></button></Link>
                </div>

                <div className='-mr-4  md:-mr-56'>
                    <HomePagesCard />
                </div>
            </div>
        </div>
    )
}

export default Home