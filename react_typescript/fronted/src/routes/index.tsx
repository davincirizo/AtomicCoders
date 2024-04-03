import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/Auth/Login";
import NotFound from "../pages/errors/NotFound";
import Home from "../pages/interfaceUser/Home";
import ProtectedRoute from "./ProtectedRoutes";
import { InterfaceUser } from "../types/InterfaceUser";

const userToken: InterfaceUser | null = window.localStorage.getItem('user')

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<ProtectedRoute user={userToken} redirectPath='login'/>}>
                 <Route index element={<Home />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path='/*' element={<NotFound />} />

        </Route>
    )
)
