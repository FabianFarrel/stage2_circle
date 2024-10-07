import { ReplyEntity } from "../../../entities/reply";

export type ReplyDTO = ReplyEntity;

export type CreateReplyDTO = Pick<
    ReplyEntity, 
    'content' | 'image'
>;