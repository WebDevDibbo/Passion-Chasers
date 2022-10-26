import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Courses/Courses";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import CourseCategory from "../../pages/CourseCategory/CourseCategory";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import CourseSummaryCard from "../../pages/Shared/CourseSummaryCard/CourseSummaryCard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/courses"),
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
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        element: <CourseCategory></CourseCategory>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path:'/coursedetails/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
      }
    ],
  },
]);
