import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
        const user = await currentUser(); 

        if(!user) {
            return new Response("unauthorized", {
                status: 402, 
            })
        }

        const {searchParams} = new URL(request.url); 
        const userId = searchParams.get('userId'); 

        const cartItem = await prisma.cart.findMany({
            where: {
                userId: userId!, 
            }
        }); 

        return new Response(JSON.stringify(cartItem), {
            status: 200, 
        })
        
    } catch (error) {
        console.log(error); 
        return new Response("server error", {
            status: 500, 
        })
        
    }
}


export async function POST(request: Request) {
    try {
        const user = await currentUser(); 
        if(!user?.firstName) {
            return new NextResponse("Unauthorized", {
                status: 401, 
            })
        }

        const body = await request.json(); 

        const { 
            productName,
            image,
            price,
            productCategory,
        } = body; 



        const cart = await prisma.cart.create({
            data: {
                productCategory,
                productName,
                price,
                image,
                userId: user?.id

            }
        })

        return NextResponse.json(cart, {
            status: 200,
        })

    } catch(error: any) {
        console.log(error, "creating cart error")
        return new NextResponse(error.message, {
            status: 500,
        })
    }
}