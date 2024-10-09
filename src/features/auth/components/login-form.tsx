import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLoginForm } from '../hooks/use-login-form';
import { ErrorMessage } from '../schemas/error';

export function LoginForm() {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <Box
      mx="auto"
      mt="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#1D1D1D"
      textColor="#FFFFFF"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl width="300px" display="flex" flexDirection="column">
          {/* Username Input */}
          <Input
            mb="10px"
            type="text"
            width="100%"
            height="28px"
            borderRadius="5px"
            {...register('userName')}
            border="1px solid #545454"
            placeholder="  Email/Username"
            backgroundColor="transparent"
          />
          {/* Display error if any */}
          {errors.userName && (
            <ErrorMessage message={errors.userName?.message} />
          )}

          {/* Password Input */}
          <Input
            my="10px"
            width="100%"
            height="28px"
            type="password"
            borderRadius="5px"
            {...register('password')}
            border="1px solid #545454"
            placeholder="  Password"
            backgroundColor="transparent"
          />
          {errors.password && (
            <ErrorMessage message={errors.password?.message} />
          )}

          {/* Forgot Password Link */}
          <Link to="/forgot" style={{ textDecoration: 'none' }}>
            <Text
              my="5px"
              color="white"
              fontSize="small"
              display="flex"
              justifyContent="end"
              textDecoration="none"
            >
              Forgot password?
            </Text>
          </Link>

          {/* Login Button */}
          <Button
            type="submit"
            width="100%"
            height="30px"
            fontSize="15px"
            fontWeight="bold"
            color="#FFFFFF"
            bg="#04A51E"
            borderRadius="15px"
            _hover={{ backgroundColor: '#FFFFFF', color: '#04A51E' }}
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
