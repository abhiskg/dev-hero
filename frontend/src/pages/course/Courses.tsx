import CourseCard from "../../components/cards/CourseCard";
import SideNav from "../../components/ui/SideNav";

const Courses = () => {
  return (
    <div className="custom-width mx-auto flex gap-6">
      <div className="rounded p-3 dark:bg-gray-900 dark:text-gray-100">
        <SideNav />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
