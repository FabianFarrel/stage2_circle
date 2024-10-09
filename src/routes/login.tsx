import { Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { LoginForm } from "../features/auth/components/login-form";

export function LoginRoute() {
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
                circle
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
                Login to Circle
            </Text>

            <LoginForm />

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
                Don't have an account yet?
                <Link to={"/register"} style={{ textDecoration: 'none', color: '#04A51E' }}>
                    Create account
                </Link>
            </Text>
        </Box>
    );
}
