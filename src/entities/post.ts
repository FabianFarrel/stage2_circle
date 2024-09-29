import { ReplyEntity } from "./reply";
import { UserEntity } from "./user";

export interface PostEntity {
    id: number;
    content?: string;
    image?: string;
    likesCount?: number;
    repliesCount?: number;
    createdAt: Date;
    updatedAt: Date;
    author:  Omit<UserEntity, 'password'>;
    Reply: ReplyEntity[];
}