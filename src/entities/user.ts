import { GetPostEntity } from "./post";
import { RoleEnum } from "./role";

export interface UserEntity {
    id: number;
    email: string;
    password: string;
    fullName?: string;
    userName?: string;
    bio?: string;
    following: number;
    followers: number;
    role: RoleEnum;
    createdAt: Date;
    updatedAt: Date;
    post: GetPostEntity[];
}