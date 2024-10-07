import { CreatePostEntity } from "../../../entities/post";

export type Post = {
    profilePhoto?: string;
    fullName: string;
    userName?: string;
    postContent: string;
    postImage?: string;
    like: number;
    reply: number;
  };
  
  export type PostResponseDTO = {
    status: string;
    message: string;
    data: CreatePostEntity[];
  };
  
export type PostDTO = CreatePostEntity;

export type CreatePostDTO = Pick<
    CreatePostEntity,
    'content' | 'image'> & {
        authorId: number;
    };
