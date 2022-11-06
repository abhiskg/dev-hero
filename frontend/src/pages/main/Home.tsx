import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className=" py-10 dark:bg-gray-800 dark:text-gray-100 ">
      <div className="custom-width mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold uppercase tracking-wider text-violet-600">
              A Learning platform for Developer
            </p>
            <h1 className="mt-4 text-4xl font-bold  sm:text-6xl lg:mt-5 xl:text-8xl">
              Connect & learn from the experts
            </h1>

            <Link
              to="/courses"
              title=""
              className="mt-8 inline-flex items-center rounded-full bg-violet-400 px-6 py-4 font-semibold text-black transition-all duration-200 hover:bg-violet-500  lg:mt-12"
              role="button"
            >
              <span className="mb-1"> Explore our courses</span>
              <svg
                className="ml-3 -mr-2 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>

            <p className="ml-3 mt-2 text-sm font-medium">
              Already joined us?{" "}
              <Link
                to="/login"
                className=" text-violet-500 transition-all duration-200 hover:underline "
              >
                Log in
              </Link>
            </p>
          </div>

          <div>
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
