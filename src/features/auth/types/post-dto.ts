import { GetPostEntity } from "../../../entities/post";

export interface PostDTO extends GetPostEntity {
    isLike: boolean
}

export type PostStoreDTO = PostDTO;