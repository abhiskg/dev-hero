import express from "express";
import { GetAllCourses, GetCourseById } from "../controllers/CourseController";

const router = express.Router();

router.get("/", GetAllCourses);

router.get("/:id", GetCourseById);

export default router;
