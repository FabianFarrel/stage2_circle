import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { UserEntity } from '../../../entities/user';
import { apiV1 } from '../../../libs/api';
import { UpdateUserFormInput, updateUserSchema } from '../schemas/user-schema';
import { UpdateUserDTO } from '../types/user-dto';
import { useToast } from '@chakra-ui/react';

export function useUser() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, } = useForm<UpdateUserFormInput>({
            resolver: zodResolver(updateUserSchema)
        });
    const queryClient = useQueryClient();
    const toast = useToast();

    async function getUser() {
        const response = await apiV1.get<null, { data: UserEntity }>(
            '/getUser', {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        return response.data;
    }

    const { data, isLoading } = useQuery<UserEntity, Error, UserEntity>({
        queryKey: ['user'],
        queryFn: getUser,
    });

    async function updateUser(data: UpdateUserDTO) {
        const formData = new FormData();
    
        if (data.userName) {
            formData.append('userName', data.userName);
        }
        if (data.fullName) {
            formData.append('fullName', data.fullName);
        }
        if (data.bio) {
            formData.append('bio', data.bio);
        }
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0]);
        }
        if (data.background && data.background[0]) {
            formData.append('background', data.background[0]);
        }

        try {
            const response = await apiV1.put<null, { data: UserEntity }>(
                `/user`, 
                formData, 
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                    }
                }
            );
    
            await queryClient.invalidateQueries({ queryKey: ['user'] });
    
            return response.data;
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error;
        }
    }

    const { mutateAsync: updateUserAsync } = useMutation<UserEntity, Error, UpdateUserDTO>({
        mutationKey: ['updateUser'],
        mutationFn: updateUser,
    });

    async function onSubmit(data: UpdateUserFormInput) {
        const updateUser: UpdateUserDTO = {
            userName: data.userName,
            fullName: data.fullName,
            image: data.image,
            background: data.background,
            bio:data.bio,
        };
    
        const profilePromise = updateUserAsync(updateUser);
    
        toast.promise(profilePromise, {
            loading: {
                title: 'Updating Profile',
                description: 'Please wait while we update your profile...',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            },
            success: {
                title: 'Profile Updated',
                description: 'Your profile has been updated successfully!',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            },
            error: {
                title: 'Profile Update Failed',
                description: 'An error occurred while updating your profile. Please try again.',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            },
        });
    
        try {
            await profilePromise;
            queryClient.invalidateQueries({ queryKey: ['user'] });
        } catch (error) {
            console.error("Error in updating profile: ", error);
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
        data,
        isLoading,
    };
}
