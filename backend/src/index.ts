import express from "express";
import cors from "cors";
import CourseRoute from "./routes/CourseRoute";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/courses", CourseRoute);

app.listen(port, () => {
  console.log("Server running");
});

module.exports = app;
