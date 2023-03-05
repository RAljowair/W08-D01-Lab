import { TypeOf, z } from "zod";

const studentObj = z.object({
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "name only acceptes text",
  }),
  age: z
    .number({
      required_error: "age is required",
      invalid_type_error: "age only acceptes number",
    })
    .min(16, "Sorry, you are too young 👦🏼")
    .max(100, "You must enter real age ⚠️"),
  major: z
    .string({
      required_error: "major is required",
      invalid_type_error: "major only acceptes text",
    })
});

export const addStudentType = z.object({
  body: studentObj,
});

export type addStudentTypeschema = TypeOf<typeof addStudentType>["body"];
