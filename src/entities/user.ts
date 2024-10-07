import { GetPostEntity } from "./post";

export interface UserEntity {
    id: number;
    email?: string;
    password: string;
    fullName?: string;
    userName?: string;
    bio?: string;
    image?: string;
    background?: string;
    following: number;
    followers: number;
    createdAt: Date;
    updatedAt: Date;
    post: GetPostEntity[];
}

export interface UpdateUserEntity {
    id: number;
    email: string;
    password: string;
    fullName?: string;
    userName?: string;
    bio?: string;
    image?: FileList;
    background?: FileList;
    following: number;
    followers: number;
    createdAt: Date;
    updatedAt: Date;
    post: GetPostEntity[];
}