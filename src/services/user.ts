import { prisma } from "../libs/prisma"

export const createUser = async (name:string, WPP:string, products: string, pg:any)=>{

    const user = await prisma.user.create({

        data:{
            name: name,
            Wpp: WPP,
            product: {

                create:{

                    product: products,
                    pg: pg

                }

            }
        }

    })

    return user;
   
}

export const sell = async (products: string, pg: string, id_buyer: number)=>{

    const sale = await prisma.product.create({  

        data:{
            product:products,
            pg: pg,
            idBuyer: id_buyer,
           
        }

    })

    return sale;
        
}