import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";



export async function PATCH(request: Request, {params}: {params: { cartId: string }})  {
    try {
        const { cartId } = params; 
        const user = await currentUser(); 

        if(!user) {
            return new Response("Unathorized", {
                status: 402, 
            })
            
        }

        const body = await request.json(); 
        
        const { 
            quantity,
            price,  

        } = body; 

        const updatedCartItemQuantity = await prisma.cart.update({
            where: {
                id: cartId
            }, 
            data: {
                quantity: quantity, 
                price: price, 
            }
        })

        return new Response(JSON.stringify({quantity: updatedCartItemQuantity.quantity}), {
            status: 200, 

        })
        
    } catch (error) {
        console.log(error); 
        return new Response("Internal Server Error", {
            status: 500, 
        })
        
    }
} 

export async function DELETE(request: Request, { params }: { params: { cartId: string }}) {
    try {
        const user = await currentUser(); 

        if(!user) {
            return new Response("Unathorized", {
                status: 402, 
            })
            
        }

        const deletedCartItem = await prisma.cart.delete({
            where: {
                id: params.cartId
            }, 
            
        })

        return new Response(JSON.stringify({quantity: deletedCartItem.quantity}), {
            status: 200, 

        }); 


        
    } catch (error) {
        console.log(error); 
        return new Response("Internal Server Error", {
            status: 500, 
        })
        
    }
}