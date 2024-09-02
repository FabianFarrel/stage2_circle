import { ForgotForm } from "../features/auth/components/forgot-form";
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link if needed

export function ForgotRoute() {
    return (
        <Box
            mx="auto"
            width="350px"
            alignItems="center"
            justifyContent="center"
            backgroundColor="black"  
            p="20px"  
            borderRadius="10px"  
        >
            <Heading 
                as='h1' 
                mx="auto"
                mt="30px"
                color="#04A51E"
                width="300px"
                display="flex"
                alignItems="center" 
                justifyContent="start"
            >
                circle
            </Heading>

            <Text 
                as='h2'
                mx="auto"
                width="300px"
                color="#FFFFFF"
                display="flex"
                alignItems="center" 
                justifyContent="start"
            >
                Forgot Password
            </Text>

            <ForgotForm />

            <Text 
                mx="auto"
                mt="10px"
                gap="5px"
                width="300px"
                fontSize="small" 
                display="flex"
                color="#FFFFFF"
                alignItems="center" 
                justifyContent="start"
            >
                Already have an account?
                <Link 
                    to="/login" // Use Link component for navigation
                    style={{ color: '#04A51E', textDecoration: 'none', marginLeft: '5px' }}>
                    Login
                </Link>
            </Text>
        </Box>
    );
}
