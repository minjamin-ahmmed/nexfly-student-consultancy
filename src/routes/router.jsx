import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Layout/Home";
import AboutUs from "../Component/AboutUs/AboutUs";
import ContactUs from "../Component/ContactUs/ContactUs";


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
            }
        ]
    },
]);

export default router;