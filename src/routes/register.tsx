import { RegisterForm } from "../features/auth/components/register-form";
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link

export function RegisterRoute() {
    return (
        <Box
            mx="auto"
            width="350px"
            alignItems="center"
            justifyContent="center"
            backgroundColor="black"  
            p="20px"  
            borderRadius="10px">
        
        <Heading 
            as='h1' 
            mx="auto"
            mt="30px"
            color="#04A51E"
            width="300px"
            display="flex"
            alignItems="center" 
            justifyContent="start">circle</Heading>

        <Heading 
            as='h2'
            mx="auto"
            width="300px"
            color="#FFFFFF"
            size="small"
            display="flex"
            alignItems="center" 
            justifyContent="start">Create account Circle</Heading>

        <RegisterForm />

        <Text 
            mx="auto"
            mt="10px"
            gap="5px"
            width="300px"
            fontSize="small" 
            display="flex"
            color="#FFFFFF"
            alignItems="center" 
            justifyContent="start">
            Already have an account?

            <Link 
                to="/login" 
                style={{ color: '#04A51E', textDecoration: 'none' }}>Login</Link>
        </Text>
    </Box>
    );
}
