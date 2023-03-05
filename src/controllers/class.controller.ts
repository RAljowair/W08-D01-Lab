import { prisma } from "../config/db";
import { Response, Request } from "express";

// function to get all classrooms
export const findAllClasses = async (req: Request, res: Response) => {
  try {
    const classRooms = await prisma.classroom.findMany();
    res.json(classRooms);
  } catch (error) {
    res.json(error);
  }
};

// function to get classroom by ID
export const findClassById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const classRoom = await prisma.classroom.findFirst({
      where: {
        id,
      },
    });
    res.json(classRoom ? classRoom : `classRoom not found with 'ID:${id}'`);
  } catch (error) {
    res.json(error);
  }
};

// function to add new classroom
export const addClass = async (req: Request, res: Response) => {
  const name = req.body.name;
  try {
    const addedUser = await prisma.classroom.create({
      data: {
        name,
      },
    });
    res.json("classroom Added Successfully ✅");
  } catch (error) {
    res.json(error);
  }
};
