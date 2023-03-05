import express from "express";
import {
  addClass,
  findAllClasses,
  findClassById,
} from "../controllers/class.controller";
import { validate } from "../middleware/validate";
import { addClassType } from "../zod.schema/zod.class";

const route = express.Router();

route.get("/", findAllClasses);
route.get("/findById/id:", findClassById);

route.post("/addClass", validate(addClassType), addClass);

export default route;
