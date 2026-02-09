import PostsLayout from "../components/PostsLayout"
import Posts from "../pages/Posts"
import PostDetail from "../pages/PostDetail"
import { fetchPostDetail } from "../api/posts"

export const postsRoutes = {
        path: "posts",
        element: <PostsLayout />,
        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: ":id",
            element: <PostDetail />,
            loader: fetchPostDetail,
            children: [
              {
                index: true,
                element: <div className="text-red-400 p-5">outlet ของ details แบบที่ 1</div>
              },
              {
                path: "detail",
                element: <div className="text-blue-400 p-5">outlet ของ details แบบที่ 2</div>
              }
            ]
          },
        ],
      }