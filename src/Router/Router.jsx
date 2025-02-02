import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../assets/Layout/MainLayout";
import Home from "../assets/Pages/Home/Home";
import Register from "../assets/Pages/Register";
import Login from "../assets/Pages/Login";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>page is not found</h2>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            

        ]
    }
]);
export default router