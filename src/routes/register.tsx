import { Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { RegisterForm } from "../features/auth/components/register-form";

export function RegisterRoute() {
    return (
        <Box
            mx="auto"
            width="100%"
            height='729px'
            alignItems="center"
            justifyContent="center"
            backgroundColor="#1D1D1D"  
            p="20px"  
            borderRadius="0px" 
        >
            <Text 
                as='h1' 
                mx="auto"
                mt={"50px"}
                color="#04A51E"
                width={"300px"}
                display={"flex"}
                fontSize={"40px"}
                fontWeight={"bold"}
                alignItems="center" 
                justifyContent="start"
            >
                Circle
            </Text>

            <Text 
                as='h2'
                mx="auto"
                width={"300px"}
                color="#FFFFFF"
                display={"flex"}
                alignItems="center" 
                justifyContent="start"
            >
                Create account Circle
            </Text>

            <RegisterForm />

            <Text 
                mx={"auto"}
                mt={"10px"}
                gap={'5px'}
                width={"300px"}
                fontSize='small' 
                display={"flex"}
                color={'#FFFFFF'}
                alignItems="center" 
                justifyContent="start"
            >
                Already have an account? 
                <Link to={"/login"} style={{ textDecoration: 'none' }}>
                    <Text 
                        as='span' // Changed to 'span' to prevent nesting issues
                        color={'#04A51E'} 
                        textDecoration={'none'}
                    >
                        Login
                    </Text>
                </Link>
            </Text>
        </Box>
    );
}
