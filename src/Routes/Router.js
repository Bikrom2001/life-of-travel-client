import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/service details/ServiceDetails";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://life-of-travel-server-three.vercel.app/services/${params.id}`)
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/updatereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://life-of-travel-server-three.vercel.app/reviews/${params.id}`)
            }

        ]
    }
])


export default router;