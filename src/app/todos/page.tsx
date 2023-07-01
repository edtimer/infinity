'use client'
import React from 'react'
import WithSubnavigation from '../components/Navbar'
import TaskTable from '../components/TaskTable'
import {  Container } from '@chakra-ui/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import {redirect} from 'next/navigation'
import { useSession } from 'next-auth/react'

const getTasks =async()=>{
  try{

    const res = await fetch(`/api/tasks`)
    if(!res.ok){
      console.log(`issue fetching from database ${res}`)
    }
return res.json()
    console.log("we got",res)
  }
  catch(err){
    console.log(`error ${err}`)
  }
}
const Todo =  () => {

  // const{data:session,status} = useSession({
  //   required:true
  // })
  // if(status==='loading'){
  //   return <></>
  // }
// const session = await getServerSession(authOptions)

// if(!session){
// redirect('/authentication')
// }
//     const re = await getTasks()
//   console.log("the dataa",re)
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