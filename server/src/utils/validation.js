import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  status: z.enum(["todo", "in_progress", "done"]).default("todo"),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  dueDate: z.string().optional(),
  tags: z.array(z.string()).optional(),
});
