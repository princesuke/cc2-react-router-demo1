import { Outlet, Link, NavLink } from "react-router";
import Header from "./Header";

export default function Layout() {
  const styles = {
    baseLink: "inline-block rounded-md px-3 py-1.5 hover:bg-gray-100",
    activeLink: "inline-block rounded-md px-3 py-1.5 bg-blue-600 text-white",
  };

  const getNavLinkClass = (isActive) =>
    isActive ? styles.activeLink : styles.baseLink;

  return (
    <div>
      <Header />
      <div className="p-3 bg-amber-200 font-bold rounded-2xl">
        <ul className="flex justify-center gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <hr /> */}
      <div className="pt-10 justify-center flex">
        <Outlet />
      </div>
    </div>
  );
}
