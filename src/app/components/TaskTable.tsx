'use client'
import { Text, Table, Button, Card, CardBody, CardFooter, Heading, Stack, Image, Checkbox, Flex, FormControl, FormLabel, Input, Link, Select } from '@chakra-ui/react'
import { Formik } from 'formik';
import React from 'react'

const TaskTable = async () => {


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

          initialValues={{ task: '', date: '', time: '' }}
          validate={values => {
            const errors: any = {
            };
            if (!values.task) {
              errors.email = 'Required';
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

          }) => (
            <form onSubmit={handleSubmit}>

              <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                  <FormControl id="task">
                    <FormLabel>Task</FormLabel>
                    <Input type="text" onChange={handleChange} value={values.task} />
                  </FormControl>
                  <FormControl id="date">
                    <FormLabel>date</FormLabel>
                    <Input type="date" onChange={handleChange} value={values.date} />
                  </FormControl>
                  <Stack spacing={6}>

                    <Button colorScheme={'blue'} variant={'solid'} type="submit" disabled={isSubmitting}>
                      Add task
                    </Button>

                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1}>

              </Flex>
              <FormControl id="time">
                <FormLabel>date</FormLabel>
                <Select id="time" placeholder='Select option' onChange={handleChange}>
                  <option value='01'>01:00</option>
                  <option value='02'>02:00</option>
                  <option value='03'>03:00</option>
                  <option value='04'>04:00</option>
                  <option value='05'>05:00</option>
                  <option value='06'>06:00</option>
                  <option value='07'>07:00</option>
                  <option value='08'>08:00</option>
                  <option value='09'>09:00</option>
                  <option value='10'>10:00</option>
                  <option value='11'>11:00</option>
                  <option value='12'>12:00</option>
                  <option value='13'>13:00</option>
                  <option value='14'>14:00</option>
                  <option value='15'>15:00</option>
                  <option value='16'>16:00</option>
                  <option value='17'>17:00</option>
                  <option value='18'>18:00</option>
                  <option value='19'>19:00</option>
                  <option value='20'>20:00</option>
                  <option value='21'>21:00</option>
                  <option value='22'>22:00</option>
                  <option value='23'>23:00</option>
                  <option value='24'>24:00</option>
                </Select>
              </FormControl>
            </form>)}
        </Formik>
        <CardFooter>

        </CardFooter>
      </Stack>
    </Card>

  )
}

export default TaskTable