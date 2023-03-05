import { prisma } from "../config/db";
import { Response, Request } from "express";

// function to get all students
export const findAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.json(error);
  }
};

// function to get student by ID
export const findStudentById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const student = await prisma.student.findFirst({
      where: {
        id,
      },
    });
    res.json(student ? student : `Student not found with 'ID:${id}'`);
  } catch (error) {
    res.json(error);
  }
};

// function to add new Student
export const addStudent = async (req: Request, res: Response) => {
  const name = req.body.name;
  const age = req.body.age;
  const major = req.body.major;
  try {
    const addedUser = await prisma.student.create({
      data: {
        name,
        age,
        major,
      },
    });
    res.json("Student Added Successfully ✅");
  } catch (error) {
    res.json(error);
  }
};
