import { UserEntity } from "../../../entities/user";

export type LoginRequestDTO = Pick<
    UserEntity, 
    "userName" | "password"
>;

export type LoginResponseDTO = {
    user: UserEntity;
    token: string;
};