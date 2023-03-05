import express from "express";
import {
  addStudent,
  findAllStudents,
  findStudentById,
} from "../controllers/student.controller";
import { validate } from "../middleware/validate";
import { addStudentType } from "../zod.schema/zod.student";

const route = express.Router();

route.get("/", findAllStudents);
route.get("/findById/id:", findStudentById);

route.post("/addStudent", validate(addStudentType), addStudent);

export default route;
