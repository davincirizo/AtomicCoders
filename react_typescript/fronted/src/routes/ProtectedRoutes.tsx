// import { Navigate, Outlet } from "react-router"

// export const ProtectedRoute = (canActivate: boolean,redirectPath:string) => {
//     if(!canActivate){
//         return <Navigate to={redirectPath} replace/>
//     }
//     return <Outlet/>
// }


import { Navigate, Outlet } from "react-router-dom";
import { InterfaceUser } from "../types/InterfaceUser";

interface ProtectedRouteProps {
    user: InterfaceUser | null;
    redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, redirectPath }) => {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;