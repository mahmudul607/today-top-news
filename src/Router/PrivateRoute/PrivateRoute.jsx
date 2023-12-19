import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';




const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    if(loading){
        return <div className=" text-center p-20 m-20"><span className="loading loading-spinner loading-lg "></span></div>;
    }
   
    if(user){
        return children;
    }
    
    
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;