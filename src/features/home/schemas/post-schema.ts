import { z } from "zod";

export const postSchema = z.object({
    content : z.string().min(4, ""),
    image : z.instanceof(FileList).refine((files) => files.length == 1, "File is Required!"),
});

export type CreatePostFormInput = z.infer<typeof postSchema>;