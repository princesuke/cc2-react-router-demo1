import { Outlet } from "react-router";
import { useLocation, useNavigate } from "react-router";

export default function PostsLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="border p-3 rounded-2xl w-full">
      <div>
        <h2 className="text-xl font-semibold ">Post Layout</h2>
        <div className="pb-10">Menu1 | Menu2 | Menu3</div>
        <div className="p-4 text-2xl text-green-700">{location.pathname}</div>
        {location.pathname === "/posts/2/detail" && (
          <button
            onClick={() => navigate("/")}
            className="pb-3 text-3xl cursor-pointer"
          >
            กดกลับไปหน้า Home
          </button>
        )}

        <Outlet />
      </div>
    </section>
  );
}
