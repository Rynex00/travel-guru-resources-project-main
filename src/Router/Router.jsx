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
        ]
    }
])

export default router