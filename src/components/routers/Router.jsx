import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../context/PrivateRouter";
import DetailsLayout from "../layout/DetailsLayout";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Category from "../pages/category/Category";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import SingleCard from "./../images/singleCard/SingleCard";
import Blog2 from "./../pages/blog/Blog2";
import ReadBlog from "./../pages/blog/ReadBlog";
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
        loader: () =>
          fetch("https://learn-language-server.vercel.app/technology"),
      },
      {
        path: "/singlePart/:id",
        element: (
          <PrivateRouter>
            <SinglePart />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learn-language-server.vercel.app/singlePart/${params.id}`
          ),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },

      // This is a FAQ routers (firstly i'm mistook it then it is i'm not change it )
      {
        path: "/blog", //FAQ components
        element: <Blog />,
        loader: () => fetch("https://learn-language-server.vercel.app/blog"),
      },

      // Real blog router
      {
        path: "/blog2", // Blog components
        element: <Blog2 />,
        loader: () =>
          fetch("https://learn-language-server.vercel.app/blogInfo"),
      },
      {
        path: "/readBlog/:id", // Blog components
        element: <ReadBlog />,
        loader: ({ params }) =>
          fetch(
            `https://learn-language-server.vercel.app/blogInfo/${params.id}`
          ),
      },

      // second layout
      // second layout
      // {
      //   path: "/singleCard/:id",
      //   element: (
      //     <PrivateRouter>
      //       {" "}
      //       <SingleCard />
      //     </PrivateRouter>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://learn-language-server.vercel.app/singlePart/${params.id}`
      //     ),
      // },

      {
        path: "/readMore/:id",
        element: (
          <PrivateRouter>
            <MoreDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learn-language-server.vercel.app/singlePart/${params.id}`
          ),
      },
    ],
  },

  // {
  //   path: "/categories/:id",
  //   element: <Category />,
  //   loader: ({ params }) =>
  //     fetch(`https://learn-language-server.vercel.app/singlePart/${params.id}`),
  // },

  {
    path: "/detailsLayout",
    element: <DetailsLayout />,
    children: [
      {
        path: "/detailsLayout/categories",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://learn-language-server.vercel.app/singlePart/${params.id}`
          ),
      },

      // second layout
      {
        path: "/detailsLayout/singleCard/:id",
        element: (
          <PrivateRouter>
            {" "}
            <SingleCard />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learn-language-server.vercel.app/singlePart/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
