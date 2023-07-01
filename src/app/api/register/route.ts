
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()
type Data = {
    email: string,
    password: string
}
export async function POST(request: Request) {
    //we extract email and password from request
    const { email, password } = await request.json()

    const checkIfUserExist = await prisma.user.findUnique({ where: { email: email } })
    if (!checkIfUserExist) {
        const newUser = await prisma.user.create({
            data: {
                email: email,
                //password can be hashed if needed
                password: password,
            }
        })
        return NextResponse.json({ 'id': newUser.id })
    }


}