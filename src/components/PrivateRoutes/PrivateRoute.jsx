import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to='/sign-in'></Navigate>
   
};

export default PrivateRoute;