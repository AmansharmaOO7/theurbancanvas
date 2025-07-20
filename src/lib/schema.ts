import { z } from "zod";

export const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  details: z.string().min(10, "Please provide more details about your project"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;