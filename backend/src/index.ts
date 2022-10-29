import express from "express";
import cors from "cors";
const courses = require("../data/courses.json") as CourseType[];

interface CourseType {
  id: string;
  name: string;
}

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Success");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const reqCourse = courses.find((course) => course.id === id);
  res.send(reqCourse);
});

app.listen(port, () => {
  console.log("Server running");
});

module.exports = app;
