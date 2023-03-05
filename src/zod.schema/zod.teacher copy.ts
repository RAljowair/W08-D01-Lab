import { TypeOf, z } from "zod";

const teacherObj = z.object({
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "name only acceptes text",
  }),
});

export const addTeacherType = z.object({
  body: teacherObj,
});

export type addTeacherTypeschema = TypeOf<typeof addTeacherType>["body"];
