import { prisma } from "../libs/prisma"

export const createUserBd = async (name:string, WPP:string)=>{

    const user = await prisma.user.create({

        data:{
            name: name,
            Wpp: WPP
        }

    })

    return user;
   
}