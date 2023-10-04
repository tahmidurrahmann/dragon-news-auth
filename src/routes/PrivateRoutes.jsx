import { useContext } from "react";
import { AuthContext } from "../shared/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const location = useLocation();
    console.log(location);

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg flex justify-center items-center min-h-screen"></span>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;