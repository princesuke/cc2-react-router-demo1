import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";
import User from "../pages/User";
import { postsRoutes } from "./posts.router";

// import Posts from "../pages/Posts";
// import PostDetail from "../pages/PostDetail";
// import { fetchPostDetail } from "../api/posts";
// import PostsLayout from "../components/PostsLayout";

const login = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user/:id/:name",
        element: <User />,
      },
      postsRoutes,
      // {
      //   path: "posts",
      //   element: <PostsLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <Posts />,
      //     },
      //     {
      //       path: ":id",
      //       element: <PostDetail />,
      //       loader: fetchPostDetail,
      //       children: [
      //         {
      //           index: true,
      //           element: <div className="text-red-400 p-5">outlet ของ details แบบที่ 1</div>
      //         },
      //         {
      //           path: "detail",
      //           element: <div className="text-blue-400 p-5">outlet ของ details แบบที่ 2</div>
      //         }
      //       ]
      //     },
      //   ],
      // },

      { path: "redirect", element: <Navigate to={login ? "/" : "/404"} /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
