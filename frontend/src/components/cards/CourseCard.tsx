import { Link } from "react-router-dom";
import { CourseType } from "../../types/courseType";

const CourseCard = ({ course }: { course: CourseType }) => {
  return (
    <div className=" rounded-md bg-white p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-1">
        <img
          src={course.image}
          alt={course.alt}
          className="block h-52 w-full rounded-md  dark:bg-gray-500"
        />
        <Link
          to={`/course/${course.id}`}
          className="block text-lg font-semibold leading-snug hover:underline dark:text-violet-400"
        >
          {course.name}
        </Link>
        <p className="text-sm leading-snug dark:text-gray-400">
          Author: {course.author}
        </p>
        <p className="font-medium">${course.price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
