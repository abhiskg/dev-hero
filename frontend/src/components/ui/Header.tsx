import { useState, useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import userIcon from "../../assets/icons/userIcon.svg";
import logo from "../../assets/icons/logo.svg";

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

  const handleLogout = () => {
    authContext
      ?.logOut()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

  return (
    <header className=" bg-primary sticky top-0 z-10 h-16 bg-violet-400 dark:bg-gray-900 dark:text-gray-100">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className="flex items-center gap-1 text-xl font-semibold" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bolt"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
          </svg>
          <span>Dev Hero</span>
        </Link>
        <ul className="relative hidden items-center gap-5 font-semibold sm:flex">
          <li className="hover:text-violet-600">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? " text-violet-600 dark:text-violet-400" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-violet-600">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? " text-violet-600 dark:text-violet-400" : ""
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="hover:text-violet-600">
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? " text-violet-600 dark:text-violet-400" : ""
              }
            >
              FAQ
            </NavLink>
          </li>
          <li className="hover:text-violet-600">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? " text-violet-600 dark:text-violet-400" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          {authContext?.user && authContext.user.uid ? (
            <li className="group  cursor-pointer">
              {authContext?.user?.photoURL ? (
                <img
                  className="mx-auto h-10 w-10 rounded-full object-cover"
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
              <ul className="absolute top-10 left-0 right-0 z-50 ml-40 hidden rounded bg-white  text-gray-800 shadow group-hover:block">
                <li className="rounded p-2 hover:bg-gray-500">
                  {authContext.user.displayName}
                </li>
                <li
                  className="rounded p-2 hover:bg-gray-500"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </li>
          ) : (
            <li className="hover:text-violet-600">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-violet-600 dark:text-violet-400" : ""
                }
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
                <div className="h-7 w-12 rounded-full bg-gray-700"></div>
                <div
                  className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-gray-100 transition ${
                    themeContext?.isDark && `translate-x-full`
                  }`}
                >
                  {themeContext?.isDark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#6d28d9"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#6d28d9"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                    </svg>
                  )}
                </div>
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
        } no-scrollbar fixed top-0 right-0 bottom-0 z-40 w-full overflow-y-auto bg-violet-400 transition-transform duration-200 ease-in-out dark:bg-gray-900 md:hidden `}
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
            <Link className="text-black" to="/faq">
              FAQ
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/blog" className="text-black">
              Blog
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/login" className="text-black">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
