import { useLoaderData } from "react-router-dom";
import CourseCard from "../../components/cards/CourseCard";
import SideNav from "../../components/ui/SideNav";
import { CourseType } from "../../types/courseType";

const Courses = () => {
  const courses = useLoaderData() as CourseType[];
  console.log(courses);
  return (
    <div className="custom-width mx-auto flex gap-5">
      <div className="rounded p-3 dark:bg-gray-900 dark:text-gray-100">
        <SideNav />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
