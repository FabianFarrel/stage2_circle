<<<<<<< Updated upstream
import React, { useState } from "react";
import { RegisterForm } from "../types";

export function useRegisterForm() {
    const [form, setForm] = useState<RegisterForm>({
        fullName: "",
        email: "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(form);
    };

    return { form, handleChange, handleSubmit };
=======
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormInputs, registerSchema } from '../schemas/register';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from "js-cookie";
import { RegisterResponseDTO, RegisterRequestDTO } from '../types/register-dto';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/use-store';
import { setUser } from '../../../store/auth-slice';
import { apiV1 } from '../../../libs/api';

export function useRegisterForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }, } = useForm<RegisterFormInputs>({
            resolver: zodResolver(registerSchema)
        });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function onSubmit(data: RegisterFormInputs) {
        try {
            const response = await apiV1.post<
                null,
                { data: RegisterResponseDTO },
                RegisterRequestDTO
            >('/auth/register', data);
            const { user, token } = response.data;

            dispatch(setUser(user));
            Cookies.set('token', token, { expires: 1 });
            navigate('/login');

            console.log(data);
            console.log(response.data);
        } catch (error) {
            console.log("Error:", error);

            if (axios.isAxiosError(error) && error.response) {
                const stackMessage = error.response.data.stack;
                if (stackMessage.includes('"fullName"')) {
                    setError('fullName', {
                        message: "Full name must be at least 5 characters long",
                    });
                }

                if (stackMessage.includes('"email"')) {
                    setError('email', {
                        message: "Invalid email format",
                    });
                }

                if (stackMessage.includes('"password"')) {
                    setError('password', {
                        message: "Password must be at least 6 characters long",
                    });
                }
            } else {
                console.log("Other Error:", error);
            }
        }
    };
    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
>>>>>>> Stashed changes
}