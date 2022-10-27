import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../../404Page/PageNotFound";
import Courses from "../../Courses/Courses";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckoutRoute from "../../pages/CheckoutRoute/CheckoutRoute";
import CourseCategory from "../../pages/CourseCategory/CourseCategory";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://learning-app-server-xi.vercel.app/courses"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://learning-app-server-xi.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        element: <CourseCategory></CourseCategory>,
        loader: ({ params }) => fetch(`https://learning-app-server-xi.vercel.app/category/${params.id}`)
      },
      {
        path:'/coursedetails/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://learning-app-server-xi.vercel.app/courses/${params.id}`)
      },
      {
        path:'/checkoutRoute/:id',
        loader: ({ params }) => fetch(`https://learning-app-server-xi.vercel.app/courses/${params.id}`),
        element:<PrivateRoute><CheckoutRoute></CheckoutRoute></PrivateRoute>
      },
      {
        path:'*',
        element:<PageNotFound></PageNotFound>
      }
    ],
  },
]);
