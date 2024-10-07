import { UserEntity } from "../../../entities/user";

export interface ForgotEmailForm {
    email: string;
}

export interface ResetPasswordForm {
    password: string;
    confirmPassword: string;
}

export type UserStoreDTO = Omit<UserEntity, "password">