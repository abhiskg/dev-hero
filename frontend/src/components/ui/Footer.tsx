import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="divide-y bg-violet-400 px-4 dark:bg-gray-900 dark:text-gray-100">
      <div className="custom-width mx-auto flex flex-col items-center justify-between space-y-8 py-10 md:flex-row md:space-y-0">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full dark:bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 flex-shrink-0 rounded-full dark:text-gray-900"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
            </svg>
          </div>
          <span className="text-2xl font-semibold">Dev Hero</span>
        </div>
        <div className="flex gap-5">
          <Link to="/register" className="footer-link-text">
            Register
          </Link>

          <Link to="/login" className="footer-link-text">
            Login
          </Link>

          <Link to="/home" className="footer-link-text">
            Home
          </Link>

          <Link to="/courses" className="footer-link-text">
            Courses
          </Link>

          <Link to="/faq" className="footer-link-text">
            FAQ
          </Link>

          <Link to="/blog" className="footer-link-text">
            Blog
          </Link>
        </div>
      </div>
      <div className="py-6 text-center text-sm dark:text-gray-400">
        © 2022 Dev Hero. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
