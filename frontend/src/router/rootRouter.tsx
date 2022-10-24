import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Blog from "../pages/blog/Blog";
import CourseDetails from "../pages/course/CourseDetails";
import Courses from "../pages/course/Courses";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/main/Home";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default rootRouter;
