import { Link } from "react-router-dom";
import { CourseType } from "../../types/courseType";

const SideNav = ({ courses }: { courses: CourseType[] }) => {
  return (
    <div>
      <h2 className="mb-8 mt-2 text-center text-lg font-semibold">
        Course Categories
      </h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <Link
            key={course.id}
            className="flex items-center gap-2"
            to={`../course/${course.id}`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-violet-400"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9.5" cy="9.5" r="5.5" />
                <circle cx="14.5" cy="14.5" r="5.5" />
              </svg>
            </span>
            <span className="hover:text-violet-400 hover:underline">
              {course.category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
