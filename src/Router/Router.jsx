import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";




const Router = createBrowserRouter([
    {
        path: '/',
        element:<Root/>,
        children: [
            {
                path:'/',
                element:<Home/>,
                loader : () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('/news.json')
            },
            {
                path:'/login',
                element: <Login></Login>,
               
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default Router;