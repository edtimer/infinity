import { PrismaClient } from ".prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
const prisma = new PrismaClient()
export const authOptions ={
    providers:[
        Credentials({
            id: "auth",
            name:"credentials",
            credentials:{
                email:{label:"Email"},
                password:{label:"Password"}
            },
             authorize: async(credentials,req)=>{
                const user:any =  prisma.user.findUnique({where:{email:credentials?.email}})
        if (user && user.password === credentials!.password) {
          return { id: user.id };
        }
                return null
            },
        })
    ],
    adapter: PrismaAdapter(prisma),
    // pages:{signIn:'/authentication'}
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }