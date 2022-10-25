import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const authContext = useContext(AuthContext);
  return (
    <header className=" bg-primary sticky top-0 z-10 h-16">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className="text-xl font-semibold" to="/">
          Dev Hero
        </Link>
        <ul className="hidden gap-5 font-medium sm:flex ">
          <li className="hover:underline">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? " underline" : "")}
            >
              Courses
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? " underline" : "")}
            >
              Blog
            </NavLink>
          </li>
          {authContext?.user && authContext.user.uid ? (
            <li>Profile</li>
          ) : (
            <li className="hover:underline">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? " underline" : "")}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="z-50 flex h-5 w-6 cursor-pointer flex-col items-end justify-between sm:hidden "
        >
          <span
            className={`h-[0.1rem] rounded-lg bg-black transition-transform  duration-100 ease-in-out ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-black  ${
              menu ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-black transition-transform duration-100 ease-in-out ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-full"
            }`}
          />
        </div>
      </nav>

      <nav
        className={`${
          menu ? "translate-x-48" : "translate-x-full"
        } no-scrollbar bg-secondary-200 fixed top-0 right-0 bottom-0 z-40 w-full overflow-y-auto transition-transform duration-200 ease-in-out md:hidden `}
      >
        <ul className="ml-10 mt-32 mb-10 flex flex-col gap-7 ">
          <li onClick={() => setMenu(false)}>
            <Link className="text-black" to="/home">
              Home
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link className="text-black" to="/courses">
              Courses
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/blog" className="text-black">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
