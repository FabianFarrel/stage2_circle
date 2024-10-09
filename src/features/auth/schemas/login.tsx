import { z } from "zod";

export const loginSchema = z.object({
    userName: z.string()
        .min(1, "Username, email, or full name is required!") // Ensure something is provided
        .refine(value => {
            // Check if the value is an email, a valid username, or a full name
            const isEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value); // Email format
            const isUsername = /^[a-zA-Z0-9_.-]+$/.test(value); // Username format
            const isFullName = /^[a-zA-Z\s]+$/.test(value); // Full name format (letters and spaces)

            return isEmail || isUsername || isFullName; 
        }, {
            message: "Please provide a valid username, email, or full name!"
        }),
    password: z.string().min(4, "Password must be at least 4 characters!"),
});

export type LoginFormInput = z.infer<typeof loginSchema>;
    