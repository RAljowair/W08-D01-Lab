import express, { Application } from "express";
import { connectDB } from "./config/db";
import studentRoute from "./routes/student.route";
import classRoute from "./routes/class.route";
import teacherRoute from "./routes/teacher.route";

const app: Application = express();
const port: number = 3309;

connectDB();

app.use(express.json());

app.use("/students", studentRoute);
app.use("/classes", classRoute);
app.use("/teachers", teacherRoute);

app.listen(port, () => {
  console.log(`Express running on port:${port}`);
});
