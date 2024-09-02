import { LoginForm } from "../features/auth/components/login-form";
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 

export function LoginRoute() {
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
            justifyContent="start">Login To Circle</Heading>

        <LoginForm />

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
            Don't have an account yet?

            <Link 
                to="/register" 
                style={{ color: '#04A51E', textDecoration: 'none' }}>Create account</Link>
        </Text>
    </Box>
    );
}
