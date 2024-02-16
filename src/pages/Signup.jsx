import React, { useRef } from 'react';
import { signUpuser } from '../services';
import SignUpUserModel from '../models/signUpUserModel';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Signup = () => {
  const navigate = useNavigate();
  const firstname = useRef('');
  const lastname = useRef('');
  const username = useRef('');
  const password = useRef('');
  const [signupStatus, setSignupStatus] = React.useState('');

  const checkInputs = async () => {
    try {
      const user = {
        fname: firstname.current.value,
        lname: lastname.current.value,
        email: username.current.value,
        password: password.current.value,
      };

      const signUpUser = new SignUpUserModel(user);

      const response = await signUpuser(user);
      console.log("User", response);

      if (response && response.status === 200) {
        setSignupStatus("User signed up successfully");
        navigate('/login');
      } else if (response && response.status === 409) {
        setSignupStatus("User already exists");
        // Handle the case where the user already exists, show an error message or update UI accordingly
      }
    } catch (e) {
      console.log("Error", e);
      setSignupStatus("Error during signup");
    }
  };

  return (
    <Box>
      <Center>
        <Stack spacing='4'>
          <VStack as='header' spacing='6' mt='8'>
            <Heading
              as='h1'
              fontWeight='300'
              fontSize='24px'
              letterSpacing='-0.5px'
            >
              Sign in to Luxe Wheels
            </Heading>
          </VStack>
          <Card bg='#f6f8fa' variant='outline' borderColor='#d8dee4' w='308px'>
            <CardBody>
              <form>
                <Stack spacing='4'>
                  <FormControl>
                    <FormLabel size='sm'>First Name</FormLabel>
                    <Input
                      type='text'
                      bg='white'
                      borderColor='#d8dee4'
                      size='sm'
                      borderRadius='6px'
                      ref={firstname}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel size='sm'>Last Name</FormLabel>
                    <Input
                      type='text'
                      bg='white'
                      borderColor='#d8dee4'
                      size='sm'
                      borderRadius='6px'
                      ref={lastname}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel size='sm'>Username or email address</FormLabel>
                    <Input
                      type='text'
                      bg='white'
                      borderColor='#d8dee4'
                      size='sm'
                      borderRadius='6px'
                      ref={username}
                    />
                  </FormControl>
                  <FormControl>
                    <HStack justify='space-between'>
                      <FormLabel size='sm'>Password</FormLabel>
                    </HStack>
                    <Input
                      type='password'
                      bg='white'
                      borderColor='#d8dee4'
                      size='sm'
                      borderRadius='6px'
                      ref={password}
                    />
                  </FormControl>

                  <Button
                    onClick={checkInputs}
                    bg='#2da44e'
                    color='white'
                    size='sm'
                    _hover={{ bg: '#2c974b' }}
                    _active={{ bg: '#298e46' }}
                  >
                    Sign up
                  </Button>

                  {signupStatus && (
                    <Text fontSize='sm' color={signupStatus.includes("Error") ? 'red' : 'green'}>
                      {signupStatus}
                    </Text>
                  )}
                </Stack>
              </form>
            </CardBody>
          </Card>

          <Card variant='outline' borderColor='#d0d7de'></Card>
        </Stack>
      </Center>
      <Center as='footer' mt='16'>
        <HStack spacing='4' pt='2'>
          <Link isExternal color='#0969da' href='#' fontSize='xs'>
            Terms
          </Link>
          <Link isExternal color='#0969da' href='#' fontSize='xs'>
            Privacy
          </Link>
          <Link isExternal color='#0969da' href='#' fontSize='xs'>
            Security
          </Link>
          <Link isExternal href='#' fontSize='xs'>
            Contact
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Signup;
