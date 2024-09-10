import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import Home from '../pages/Home/Home'
import ErrorPages from '../pages/ErrorPages/ErrorPages'
import News from '../pages/News/News'
import Destination from '../pages/Destination/Destination'
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'
import Booking from '../pages/Booking/Booking'
import LogIn from '../pages/LogIn/LogIn'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import StayInRoom from '../pages/Allroom/StayInRoom/StayInRoom'
import PrivatRouter from './PrivatRouter'
import AllHotel from '../pages/Allroom/AllHotel/AllHotel'
import RoomDatiles from '../pages/Allroom/RoomDatiles/RoomDatiles'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/booking',
                element: <Booking />,
            },
            {
                path: '/login',
                element: <LogIn />,
            },
            {
                path: '/createAccount',
                element: <CreateAccount />,
            },
            {
                path: '/news',
                element: <News />,
            },
            {
                path: '/destination',
                element: <Destination />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/allHotel',
                loader: () => fetch('/categories.json'),
                element: <AllHotel />,
            },
            {
                path: '/allhotell/:allhotellid',
                element: <RoomDatiles />,
                loader: () => fetch('/categories.json')
            },
            {
                path: '/stayInRoom',
                element: <PrivatRouter><StayInRoom /></PrivatRouter>,
            }

        ]
    }
])

export default router