import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Blog from "../pages/blog/Blog";
import Checkout from "../pages/checkout/Checkout";
import CourseDetails from "../pages/course/CourseDetails";
import Courses from "../pages/course/Courses";
import ErrorPage from "../pages/error/ErrorPage";
import Faq from "../pages/faq/Faq";
import Home from "../pages/main/Home";
import PrivateRoute from "./PrivateRoute";

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
        path: "/home",
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
        loader: () => fetch("https://dev-hero.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://dev-hero.vercel.app/courses/${params.id}`),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://dev-hero.vercel.app/courses/${params.id}`),
      },
    ],
  },
]);

export default rootRouter;
