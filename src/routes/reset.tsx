import { Box, Heading, Text } from '@chakra-ui/react';
import { ResetForm } from "../features/auth/components/reset-form";

export function ResetRoute() {
    return (
        <Box
            mx="auto"
            width={'350px'}
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
                Reset Password
            </Text>

            <ResetForm />
        </Box>
    );
}
