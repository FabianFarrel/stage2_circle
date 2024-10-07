import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Cookies from "js-cookie";
import { useForm } from 'react-hook-form';
import { setUser } from '../../../store/auth-slice';
import { useAppDispatch } from '../../../store/use-store';
import { LoginFormInput, loginSchema } from '../schemas/login';
import { LoginRequestDTO, LoginResponseDTO } from '../types/login-dto';
import { apiV1 } from '../../../libs/api';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

export function useLoginForm() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginFormInput>({
        resolver: zodResolver(loginSchema)
    });

    const dispatch = useAppDispatch();
    const toast = useToast();
    const navigate = useNavigate();  // Initialize useNavigate hook

    async function onSubmit(data: LoginFormInput) {
        try {
            toast({
                title: "Logging in...",
                status: "loading",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });

            const response = await apiV1.post<
                null,
                { data: LoginResponseDTO },
                LoginRequestDTO
            >('/auth/login', data);
            const { user, token } = response.data;

            dispatch(setUser(user));
            Cookies.set('token', token, { expires: 1 });

            toast({
                title: "Login Successful!",
                description: `Welcome back, ${user.fullName}!`,
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });

            navigate('/');  // Navigate to the home page after login

        } catch (error) {
            let errorMessage = "Something went wrong during login.";

            if (axios.isAxiosError(error) && error.response) {
                const stackMessage = error.response.data.message;
                if (stackMessage.includes('Email')) {
                    setError('email', {
                        message: error.response.data.message,
                    });
                }

                if (stackMessage.includes('Password')) {
                    setError('password', {
                        message: error.response.data.message,
                    });
                }

                errorMessage = "Please check your email and password.";
            }

            toast({
                title: "Login Failed",
                description: errorMessage,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
}
