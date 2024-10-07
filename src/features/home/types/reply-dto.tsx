import { CreateReplyEntity } from "../../../entities/reply";

export type ReplyDTO = CreateReplyEntity;

export type CreateReplyDTO = Pick<
    CreateReplyEntity,
    'content' | 'image'> & {
        postId: number;
    };