import { Link, useLoaderData } from "react-router-dom";
import { CourseType } from "../../types/courseType";

const CourseDetails = () => {
  const course = useLoaderData() as CourseType;

  return (
    <div className="custom-width mx-auto dark:text-gray-100">
      <div className="relative flex-1">
        <h1 className="header-style mb-5 pt-6">{course.name}</h1>

        <img
          src={course.image}
          alt={course.alt}
          className="block h-60 w-full rounded-md object-cover object-center"
        />

        <div className="mt-3 flex items-center justify-between">
          <div className=" font-medium">
            Course Duration: {course.duration} hours{" "}
          </div>
          <div className="font-medium">Ratings: {course.ratings}</div>
        </div>

        <div className="font-medium">Author: {course.author}</div>
        <div className="font-medium">Exclusive Price: {course.price}$</div>
        <div className="mt-5 text-gray-800 dark:text-gray-400">
          {course.description}
        </div>
        <div className="my-10 flex justify-center">
          <Link
            to={`/checkout/${course.id}`}
            className=" rounded-md bg-violet-400 py-2 px-3 font-medium shadow-md hover:bg-violet-500"
          >
            Get premium access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
