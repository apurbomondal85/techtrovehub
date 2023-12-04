import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Singup/SingUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import OfferPage from "../Pages/OfferPage/OfferPage";
import Category from "../Pages/Category/Category";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/offer-product',
                element: <OfferPage />
            },
            {
                path: '/category',
                element: <Category />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/singup",
        element: <SingUp />,
    },
]);