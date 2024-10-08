import { string, z } from "zod";

export const updateUserSchema = z.object({
    fullName : string(),
    userName : string(),
    bio: string().optional(),
    image: z.instanceof(FileList).optional(),
    background: z.instanceof(FileList).optional()
});

export type UpdateUserFormInput = z.infer<typeof updateUserSchema>;