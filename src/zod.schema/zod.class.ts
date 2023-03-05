import { TypeOf, z } from "zod";

const classObj = z.object({
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "name only acceptes text",
  }),
});

export const addClassType = z.object({
  body: classObj,
});

export type addClassTypeschema = TypeOf<typeof addClassType>["body"];
