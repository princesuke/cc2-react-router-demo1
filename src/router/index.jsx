import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";
import User from "../pages/User";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import { fetchPostDetail } from "../api/posts";

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

      {
        path: "posts",
        element: <Posts />,
      },
      { 
        path: "posts/:id", 
        element: <PostDetail />, 
        loader: fetchPostDetail
       },
      { path: "redirect", element: <Navigate to={login ? "/" : "/404"} /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
