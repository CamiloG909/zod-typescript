import { z } from "zod";

export const loginSchema = z.object({
	body: z.object({
		email: z.string().min(1, "Email is required").email("Email is invalid"),
		password: z.string().min(6, "Password too short"),
	}),
});
