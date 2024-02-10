
import React, { useRef, useState } from 'react';
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
import { signUpuser } from '../services';
import SignUpUserModel from '../models/signUpUserModel';


const Signup = () => {

  const firstname = useRef('');
  const lastname = useRef('');;
  const username = useRef('');
  const password = useRef('');


  const checkInputs = () => {
    console.log(firstname.current.value, lastname.current.value, username.current.value, password.current.value);
    console.log("Signing up");
    handleSignup();
  }

  const handleSignup = async () => {
  
    const user = {
      fname : firstname.current.value,
      lname : lastname.current.value,
      email : username.current.value,
      password : password.current.value
    }
   
    const signUpUser = new SignUpUserModel(user);  

    const response = await signUpuser(user);
    console.log("User", response);
  }


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
                    <FormLabel size='sm'>last Name</FormLabel>
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

                  <Button onClick={checkInputs}
                    bg='#2da44e'
                    color='white'
                    size='sm'
                    _hover={{ bg: '#2c974b' }}
                    _active={{ bg: '#298e46' }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>

          <Card variant='outline' borderColor='#d0d7de'>

          </Card>
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
            Contac
          </Link>
        </HStack>
      </Center>
    </Box>
  );
}

export default Signup;