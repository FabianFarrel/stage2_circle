import {
    FormControl,
    Input,
    Button,
    Box,
    Text
} from '@chakra-ui/react';
import { useForgotForm } from '../hooks/use-forgot-form';

export function ForgotForm() {
    const { form, handleChange, handleSubmit, error, success } = useForgotForm();

    return (
        <Box
            mx="auto"
            mt={'20px'}
            display={"flex"}
            alignItems="center"
            textColor={'#FFFFFF'}
            justifyContent="center"
            bg='#1D1D1D'
        >
            <FormControl width={'300px'} display={'flex'} flexDirection={'column'}>
                <Input 
                    mb={'10px'}
                    type='email' 
                    name='email' 
                    value={form.email}
                    width={'100%'}
                    height={'28px'}
                    borderRadius={'5px'}
                    onChange={handleChange} 
                    border={'1px solid #545454'}
                    placeholder='  Email/Username'
                    backgroundColor={'transparent'}
                />
                <Button
                    width={'100%'}
                    border={'none'}
                    height={'30px'}
                    mt={'8px'}
                    fontSize={'15px'}
                    color={'#FFFFFF'}
                    cursor={'pointer'}
                    fontWeight={'bold'}
                    borderRadius={'15px'}
                    onClick={handleSubmit}
                    backgroundColor={'#04A51E'}
                    _hover={{ backgroundColor: '#FFFFFF', color: '#FFFFFF' }}
                >
                    Send
                </Button>
                {error && <Text color='red.500' mt={2}>{error}</Text>}
                {success && <Text color='green.500' mt={2}>Email sent successfully!</Text>}
            </FormControl>
        </Box>
    );
}
