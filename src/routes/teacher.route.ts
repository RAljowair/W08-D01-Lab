import express from "express";
import {
  addTeacher,
  findAllTeachers,
  findTeacherById,
} from "../controllers/teacher.controller";
import { validate } from "../middleware/validate";
import { addTeacherType } from "../zod.schema/zod.teacher";

const route = express.Router();

route.get("/", findAllTeachers);
route.get("/findById/:id", findTeacherById);

route.post("/addTeacher", validate(addTeacherType), addTeacher);

export default route;
