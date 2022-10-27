import { useLoaderData } from "react-router-dom";
import { CourseType } from "../../types/courseType";

const CourseDetails = () => {
  const course = useLoaderData() as CourseType;
  console.log(course);
  return (
    <div className="custom-width mx-auto">
      <img src={course.image} alt={course.alt} />
    </div>
  );
};

export default CourseDetails;
