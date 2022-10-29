"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const courses = require("./data/courses.json");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
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
