import {createBrowserRouter} from "react-router-dom";
import Main from "../Main";
import Home from "../Page/Home";
import Category from "../Page/Category";
import News from "../Page/News";
import Login from "../LoginRegister/Login";
import Register from "../LoginRegister/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Profile/Profile";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children : [

            {
                path:'/',
                element: <Home></Home>,
                loader: ({params}) => fetch(`https://deagon-news-server-neon.vercel.app/news`)
            },{
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://deagon-news-server-neon.vercel.app/category/${params.id}`)
            },{
                path:'/news/:id',
                element:<PrivateRoute> <News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://deagon-news-server-neon.vercel.app/news/${params.id}`)
            },{
                path:'/login',
                element: <Login></Login>,
            },{
                path:'/register',
                element: <Register></Register>,
            },{
            path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }

        ]
    }
])