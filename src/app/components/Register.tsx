import React, { useState } from 'react';
import {

    Button,
    Heading,
    Flex,
    FormControl,

    FormLabel,
    Input,

    InputGroup,
Text,
    InputRightElement,
    Card,
    Container,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import WithSubnavigation from './Navbar';

export const RegistrationForm = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <>
            <WithSubnavigation />
            <Container >
                <Card p={20} mt={50}>


                    <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                        User Registration
                    </Heading>
                    <Flex>
                        <FormControl mr="5%">
                            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                                First name
                            </FormLabel>
                            <Input id="first-name" placeholder="First name" />
                        </FormControl>

                    </Flex>
                    <FormControl mt="2%">
                        <FormLabel htmlFor="email" fontWeight={'normal'}>
                            Email address
                        </FormLabel>
                        <Input id="email" type="email" />

                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                            Password
                        </FormLabel>
                        <InputGroup size="md">
                            <Input
                                pr="4.5rem"
                                type={show ? 'text' : 'password'}
                                placeholder="Enter password"
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                    show
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button p={5} bg={'blue.900'} mt={5} h="1.75rem" size="md" onClick={handleClick}>
                        <Text color={'white'}>Login</Text>
                    </Button>
                </Card>
            </Container>
        </>
    );
};


