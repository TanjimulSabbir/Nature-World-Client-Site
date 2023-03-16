import Home from "../../Pages/Home";
import Layout from "../Layout/Layout"
import { createBrowserRouter } from "react-router-dom";
import About from "../../Pages/About/About";

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
                path: '/login',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Home></Home>
            }
        ]
    }
])

export default Router;