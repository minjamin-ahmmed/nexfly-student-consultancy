import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Layout/Home";
import AboutUs from "../Component/AboutUs/AboutUs";
import ContactUs from "../Component/ContactUs/ContactUs";
import SelfAssesment from "../Component/SelfAssesment/SelfAssesment";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import EnquireResult from "../Component/EnquireResult/EnquireResult";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/selfAssesment",
                element: <SelfAssesment></SelfAssesment>
            },
            {
                path: "/enquire-result",
                element: <EnquireResult></EnquireResult>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/signin",
                element: <Login></Login>
            },
            {
                path: "/auth/signup",
                element: <SignUp></SignUp>
            },

        ]
    }

]);

export default router;