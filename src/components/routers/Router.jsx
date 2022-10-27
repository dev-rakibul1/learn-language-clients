import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../context/PrivateRouter";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import SingleCard from "./../images/singleCard/SingleCard";
import Blog2 from "./../pages/blog/Blog2";
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
        element: (
          <PrivateRouter>
            <SinglePart />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePart/${params.id}`),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },

      // This is a FAQ routers (firstly i'm mistook it then it is i'm not change it )
      {
        path: "/blog", //FAQ components
        element: <Blog />,
        loader: () => fetch("http://localhost:5000/blog"),
      },

      // Real blog router
      {
        path: "/blog2", // Blog components
        element: <Blog2 />,
        loader: () => fetch("http://localhost:5000/blog"),
      },

      // second layout
      // second layout
      {
        path: "/singleCard/:id",
        element: (
          <PrivateRouter>
            {" "}
            <SingleCard />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singlePart/${params.id}`),
      },

      {
        path: "/readMore/:id",
        element: (
          <PrivateRouter>
            <MoreDetails />
          </PrivateRouter>
        ),
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
