import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="max-w-lg rounded-md bg-white p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-1">
        <img
          src="https://source.unsplash.com/random/480x360/?4"
          alt=""
          className="block h-60 w-full rounded-md object-cover object-center dark:bg-gray-500"
        />
        <Link
          to="/course/1"
          className="block text-lg font-semibold leading-snug dark:text-violet-400"
        >
          Facere ipsa nulla corrupti praesentium pariatur architecto
        </Link>
        <p className="leading-snug dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="font-medium">$75</p>
      </div>
    </div>
  );
};

export default CourseCard;
