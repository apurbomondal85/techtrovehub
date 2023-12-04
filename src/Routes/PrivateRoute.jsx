import { Navigate, useLocation } from "react-router-dom";
import getProvider from "../utiliz/getProvider"

const PrivateRoute = ({ children }) => {
    const {user, loader} = getProvider();
    const location = useLocation();

    if (loader) {
        return <div>loading.....</div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace/>
}

export default PrivateRoute