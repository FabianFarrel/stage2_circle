import { z } from "zod";

export const postSchema = z.object({
    content: z.string().min(4, "Content must be at least 4 characters long."),
    image: z.union([
        z.instanceof(FileList),  
        z.string().url().optional(),  
        z.null(),  
    ]).optional(),
});

export type CreatePostFormInput = z.infer<typeof postSchema>;
