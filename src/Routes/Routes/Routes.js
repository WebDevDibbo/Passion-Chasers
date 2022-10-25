import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import CourseCategory from "../../pages/CourseCategory/CourseCategory";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const routes = createBrowserRouter([
    
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch("http://localhost:5000/courses")
            },
            {
                path:'/category/:id',
                element:<CourseCategory></CourseCategory>
            },
            
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            
        ]
        }
               

])