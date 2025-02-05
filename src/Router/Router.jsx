import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Shared/Register";
import Login from "../Pages/Shared/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplications/MyApplication";
import AddJobs from "../Pages/AddJobs/AddJobs";

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
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)

            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>

            },
            {
                path: '/myjob',
                element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>

            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>

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