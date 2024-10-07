import { CreatePostEntity } from "../../../entities/post";

export type PostDTO = CreatePostEntity;

export type CreatePostDTO = Pick<
    CreatePostEntity,
    'content' | 'image'> & {
        authorId: number;
    };
