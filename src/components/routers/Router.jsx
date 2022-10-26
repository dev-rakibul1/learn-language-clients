import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import SingleCard from "./../images/singleCard/SingleCard";
import Login from "./../pages/login/Login";
import MoreDetails from "./../pages/moreDetails/MoreDetails";
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
        loader: () => fetch("http://localhost:5000/technology"),
      },
      {
        path: "/singlePart/:id",
        element: <SinglePart />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePart/${params.id}`),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },

      // second layout
      // second layout
      {
        path: "/singleCard/:id",
        element: <SingleCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePart/${params.id}`),
      },

      {
        path: "/readMore/:id",
        element: <MoreDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePart/${params.id}`),
      },

      // {
      //   path: "/categories/:id",
      //   element: <Category />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/singlePart/${params.id}`),
      // },
    ],
  },
]);

export default router;
