'use client'
import React from 'react'
import WithSubnavigation from '../components/Navbar'
import TaskTable from '../components/TaskTable'
import {  Container } from '@chakra-ui/react'

const Todo = () => {
  return (
    <>
    <WithSubnavigation/>
    <Container display={'flex'} justifyContent={'center'} alignItems={'center'} mt={30}>
    <TaskTable/>
    </Container>
    </>
  )
}

export default Todo