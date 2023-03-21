import Home from "../../Pages/Home";
import Layout from "../Layout/Layout"
import { createBrowserRouter } from "react-router-dom";
import About from "../../Pages/About/About";
import Shop from "../../Pages/Shop/Shop";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import BlogDetails from "../../Pages/Blog/BlogDetails/BlogDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdateProfile from "../Shared/UpdateProfile/UpdateProfile";
import ShopDetails from "../../Pages/ShopDetails/ShopDetails";
import Booking from "../../Pages/Booking/Booking";
import Payment from "../../Pages/Payment/Payment";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/blog',
                element: <Blog ></Blog>
            },
            {
                path: '/blog/:id',
                element: <BlogDetails />
            },
            {
                path: '/contact',
                element: <Contact ></Contact>
            },
            {
                path: '/shop/:id',
                element: <ShopDetails></ShopDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp ></SignUp>
            },
            {
                path: '/updateprofile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            }
        ]
    }
])

export default Router;