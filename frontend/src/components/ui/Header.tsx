import { useState, useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import userIcon from "../../assets/icons/userIcon.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const authContext = useContext(AuthContext);
  const themeContext = useContext(ThemeContext)!;
  const themeRef = useRef<HTMLInputElement | null>(null);

  const handleDarkMode = () => {
    const checkbox = themeRef.current?.checked as boolean;
    themeContext.setIsDark(!themeContext.isDark);
    localStorage.setItem("dev-hero-theme", checkbox.toString());
  };

  return (
    <header className=" bg-primary sticky top-0 z-10 h-16">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className="text-xl font-semibold" to="/">
          Dev Hero
        </Link>
        <ul className="hidden items-center gap-5 font-medium sm:flex">
          <li className="hover:underline">
            <NavLink
              to="/home"
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
            <li className="cursor-pointer">
              {authContext?.user?.photoURL ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={authContext?.user?.photoURL}
                  alt="User Photo"
                />
              ) : (
                <img
                  className="h-10 w-10 rounded-full"
                  src={userIcon}
                  alt="User Photo"
                />
              )}
            </li>
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
          <li>
            <label htmlFor="toggle">
              <div className="relative cursor-pointer">
                <input
                  ref={themeRef}
                  type="checkbox"
                  checked={themeContext.isDark}
                  onChange={handleDarkMode}
                  name=""
                  id="toggle"
                  className="sr-only"
                />
                <div className="h-7 w-12 rounded-full bg-gray-600"></div>
                <div
                  className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition ${
                    themeContext?.isDark && `translate-x-full`
                  }`}
                ></div>
              </div>
            </label>
          </li>
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
