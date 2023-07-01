'use client'
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import WithSubnavigation from '../components/Navbar';
import { Formik } from 'formik';
import { signIn } from 'next-auth/react';

export default function Authentication() {
  return (
    <>
      <WithSubnavigation />
      <Formik

        initialValues={{ email: '', password: '' }}

        validate={values => {

          const errors:any = {
 
          };
          

          if (!values.email) {

            errors.email = 'Required';

          } else if (

            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

          ) {

            errors.email = 'Invalid email address';

          }

          return errors;

        }}

        onSubmit={(values, { setSubmitting }) => {
         const email = values.email;
         const password = values.password;
          signIn("auth", { email,password});
          // setTimeout(() => {

          //   alert(JSON.stringify(values, null, 2));

          //   setSubmitting(false);

          // }, 400);

        }}

      >

        {({

          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting,

          /* and other goodies */

        }) => (
          <form onSubmit={handleSubmit}>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
              <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                  <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" onChange={handleChange} value={values.email} />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" onChange={handleChange} value={values.password} />
                  </FormControl>
                  <Stack spacing={6}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>
                      <Link color={'blue.500'}>Forgot password?</Link>
                    </Stack>
                    <Button colorScheme={'blue'} variant={'solid'} type="submit" disabled={isSubmitting}>
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1}>
                <Image
                  alt={'Login Image'}
                  objectFit={'cover'}
                  src={
                    '/background.jpg'
                  }
                />
              </Flex>
            </Stack>
          </form>)}
      </Formik>
    </>
  );
}