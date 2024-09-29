import { PostEntity } from "../../../entities/post";

export type PostDTO = PostEntity;

export type CreatePostDTO = Pick<
    PostEntity,
    'content' | 'image'> & {
        authorId: number;
    };