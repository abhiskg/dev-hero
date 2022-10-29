import { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideNav from "../../components/ui/SideNav";
import { CourseType } from "../../types/courseType";
// import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData() as CourseType;
  const ref = createRef<any>();

  return (
    <div className="custom-width mx-auto flex gap-5">
      <div className=" w-52 rounded bg-white  p-3 shadow dark:bg-gray-900 dark:text-gray-100">
        <SideNav />
      </div>
      <div ref={ref} className="flex-1">
        <h1 className="mb-5 text-center text-2xl font-semibold">
          {course.name}
        </h1>
        {/* <ReactToPdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </ReactToPdf> */}
        <img
          src={course.image}
          alt={course.alt}
          className="block h-60 w-full rounded-md object-cover object-center"
        />

        <div className="mt-3 flex items-center justify-between">
          <div>Course Duration: {course.duration} hours </div>
          <div>Ratings: {course.ratings}</div>
        </div>

        <div>Author: {course.author}</div>
        <div>Exclusive Price: {course.price}$</div>
        <div>{course.description}</div>
        <div className="my-10 flex justify-center">
          <Link
            to="/checkout"
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
