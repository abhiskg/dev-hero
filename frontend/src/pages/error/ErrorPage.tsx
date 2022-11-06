import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex h-screen items-center p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-3 text-9xl font-extrabold dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="mb-7 text-2xl font-semibold md:text-3xl">
            Sorry! Page Not Found
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="rounded bg-violet-400 px-8 py-3 font-semibold dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
