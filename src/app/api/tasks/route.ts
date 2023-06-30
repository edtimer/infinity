
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()
type Data ={
  id:number
  title:string
  content:string
  published:Boolean
  author:string  
  authorId:number
  status:String
}
export async function GET(request: Request) {
  // throw new Error("errror! 💥")
  // try{

    const posts =await prisma.task.findMany()
    console.log("in server",posts)
  //   return response.status(200).json(posts)
  // }
  // catch(err){
  //   response.status(500).json(err)
  // }
// console.log("the result", response.json(posts))   


//   return response.json({ name: 'John Doe' })
  return  NextResponse.json(posts)

  }