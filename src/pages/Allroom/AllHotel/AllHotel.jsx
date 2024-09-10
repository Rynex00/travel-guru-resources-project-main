import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Navber from '../../Shared/Navber/Navber';
import RoomDatiles from '../RoomDatiles/RoomDatiles';

const AllHotel = () => {

    const allHotel = useLoaderData();
    console.log(allHotel)

    return (
        <div>
            <Navber />
            <div className='pt-32'>
                <h2> AllHotel : {allHotel.length}</h2>

                {
                    allHotel.map(allhotell => <RoomDatiles allhotell={allhotell} />)
                }

            </div>
        </div>
    )
}

export default AllHotel