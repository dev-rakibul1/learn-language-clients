import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SecondRoot from "../layout/SecondRoot";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Course from "./../images/course/Course";
import Category from "./../pages/category/Category";
import Register from "./../pages/register/Register";
import SinglePart from "./../pages/single/SinglePart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/language"),
      },
      {
        path: "/singlePart/:id",
        element: <SinglePart />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePart/${params.id}`),
      },
      { path: "/register", element: <Register /> },

      // secound layout
      {
        path: "/course",
        element: <SecondRoot />,
        loader: () => fetch("http://localhost:5000/language"),
        children: [
          {
            path: "/course/:id",
            element: <Course />,
          },
        ],
      },
      {
        path: "/categories/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePart/${params.id}`),
      },
    ],
  },
]);

export default router;
