import { Text, Table, Button, Card, CardBody, CardFooter, Heading, Stack, Image, Checkbox, Flex, FormControl, FormLabel, Input, Link } from '@chakra-ui/react'
import { Formik } from 'formik';
import React from 'react'

const TaskTable = () => {
  return (
    <Card p={15}
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >


      <Stack>
        <CardBody>
          <Heading size='md'>Add a task</Heading>

          <Text py='2'>
            Feel free to add a new task with the option to add a reminder.
          </Text>
        </CardBody>
        <Formik

          initialValues={{ email: '', password: '' }}

          validate={values => {

            const errors: any = {

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

            setTimeout(() => {

              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);

            }, 400);

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
                        Add task
                      </Button>


                    </Stack>
                  </Stack>
                </Flex>
                <Flex flex={1}>
  
                </Flex>
           
            </form>)}
        </Formik>
        <CardFooter>

        </CardFooter>
      </Stack>
    </Card>
  )
}

export default TaskTable