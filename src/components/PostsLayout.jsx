import { Outlet } from "react-router";

export default function PostsLayout() {
  return (
    <section className="border p-3 rounded-2xl w-full">
      <div>
        <h2 className="text-xl font-semibold ">Post Layout</h2>
        <div className="pb-10">Menu1 | Menu2 | Menu3</div>
        <Outlet />
      </div>
    </section>
  );
}
