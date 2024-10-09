import { useState } from "react";
import { ForgotEmailForm } from "../types/dto";
import axios from 'axios';

export function useForgotForm() {
    const [form, setForm] = useState<ForgotEmailForm>({ email: '' });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/forgot', form);
            setSuccess(true);
            setError(null);
            console.log(response.data.message);
        } catch (error) {
            setSuccess(false);
            if (axios.isAxiosError(error)) {
                // Provide a fallback error message
                setError(error.response?.data?.message || 'Failed to send email. Please try again later.');
            } else {
                setError('An unexpected error occurred.');
            }
            console.error(error);
        }
    }
    

    return { form, handleChange, handleSubmit, error, success };
}
