import { UserEntity } from "../../../entities/user";

export type UserDTO = UserEntity;

export type UpdateUserDTO = Pick<
    UserEntity, 
    'fullName' | 'userName' | 'bio'
>;