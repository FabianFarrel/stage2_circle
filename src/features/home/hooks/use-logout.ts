import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiV1 } from '../../../libs/api';
import { removeUser } from '../../../store/auth-slice';
import { useToast } from '@chakra-ui/react';

export function useLogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const logout = async () => {
        const logoutPromise = apiV1.post('/logout').then(() => {
            Cookies.remove('token');
            dispatch(removeUser());
            navigate('/login', { replace: true });
        });

        toast.promise(logoutPromise, {
            loading: {
                title: 'Logging out',
                description: 'Please wait while we log you out...',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            },
            success: {
                title: 'Logout Successful',
                description: 'You have been logged out successfully.',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            },
            error: {
                title: 'Logout Failed',
                description: 'An error occurred during logout. Please try again.',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            },
        });

        try {
            await logoutPromise;
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return logout;
}
