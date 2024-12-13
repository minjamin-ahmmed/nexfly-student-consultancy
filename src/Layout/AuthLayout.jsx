
import Navbar from "../Component/Navbar/Navbar";

import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;