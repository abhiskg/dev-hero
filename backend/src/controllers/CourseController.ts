import { Request, Response } from "express";
const courses = require("../../data/courses.json") as CourseType[];

interface CourseType {
  id: string;
  name: string;
}

const GetAllCourses = (req: Request, res: Response) => {
  try {
    res.send(courses);
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const GetCourseById = (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const reqCourse = courses.find((course) => course.id === id);
    res.send(reqCourse);
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export { GetAllCourses, GetCourseById };
