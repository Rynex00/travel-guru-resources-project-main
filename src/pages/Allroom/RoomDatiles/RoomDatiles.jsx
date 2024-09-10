import React from 'react'
import { Link } from 'react-router-dom'

const RoomDatiles = ({ allhotell }) => {

    const { id, name } = allhotell

    return (
        <div>
            <h2>RoomDatiles Name : {name}</h2>
            <Link to={`/allhotell/${id}`} >Cilik</Link>
        </div>
    )
}

export default RoomDatiles