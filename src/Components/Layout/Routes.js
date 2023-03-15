import Home from "../../Pages/Home";
import Layout from "../Layout/Layout"
import { createBrowserRouter } from "react-router-dom";

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