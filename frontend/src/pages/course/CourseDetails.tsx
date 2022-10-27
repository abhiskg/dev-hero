import { Link, useLoaderData } from "react-router-dom";
import { CourseType } from "../../types/courseType";

const CourseDetails = () => {
  const course = useLoaderData() as CourseType;
  console.log(course);
  return (
    <div className="custom-width mx-auto">
      <img src={course.image} alt={course.alt} />
      <Link className="flex justify-center" to="/checkout">
        <span className=" rounded-md bg-violet-400 py-2 px-3 font-medium shadow-md hover:bg-violet-500">
          Get premium access
        </span>
      </Link>
    </div>
  );
};

export default CourseDetails;
