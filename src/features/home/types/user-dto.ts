import { UpdateUserEntity } from "../../../entities/user";

export type UserDTO = UpdateUserEntity;

export type UpdateUserDTO = Pick<
    UserDTO,
    'fullName' | 'userName' | 'bio' | 'image' | 'background'
>;