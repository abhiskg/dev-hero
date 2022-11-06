import { useLoaderData } from "react-router-dom";
import CourseCard from "../../components/cards/CourseCard";
import SideNav from "../../components/ui/SideNav";
import useDocTitle from "../../hooks/useDocTitle";
import { CourseType } from "../../types/courseType";

const Courses = () => {
  const courses = useLoaderData() as CourseType[];
  useDocTitle("Courses");

  return (
    <div className="custom-width mx-auto flex flex-col gap-5 sm:flex-row">
      <div className=" rounded bg-white p-3  shadow dark:bg-gray-900 dark:text-gray-100 sm:w-52">
        <SideNav courses={courses} />
      </div>
      <div className="grid flex-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
