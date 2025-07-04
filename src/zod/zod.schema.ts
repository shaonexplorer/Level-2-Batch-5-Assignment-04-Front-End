import { z } from "zod";

export const bookSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(80, { message: "Title cannot exceed 80 characters" }),
  description: z.string().min(1, { message: "Description is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  isbn: z.string(),
  copies: z.coerce.number().positive(),
});

export const borrowSchema = z.object({
  quantity: z.coerce.number().positive(),
  dueDate: z.date(),
});
