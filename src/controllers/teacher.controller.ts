import { prisma } from "../config/db";
import { Response, Request } from "express";

// function to get all teachers
export const findAllTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await prisma.teacher.findMany();
    res.send(teachers);
  } catch (error) {
    res.send(error);
  }
};

// function to get Teacher by ID
export const findTeacherById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const teacher = await prisma.teacher.findFirst({
      where: {
        id,
      },
    });
    res.json(teacher ? teacher : `Teacher not found with 'ID:${id}'`);
  } catch (error) {
    res.json(error);
  }
};

// function to add new Teacher
export const addTeacher = async (req: Request, res: Response) => {
  const name = req.body.name;
  try {
    const addedTeacher = await prisma.teacher.create({
      data: {
        name,
      },
    });
    res.json("Teacher Added Successfully ✅");
  } catch (error) {
    res.json(error);
  }
};
