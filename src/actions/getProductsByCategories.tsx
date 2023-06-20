import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";


export async function getProductById(id: string) {
    try {
        const user = await currentUser(); 
        if(!user?.firstName) {
            return null; 
        }

        const product = await prisma.product.findUnique({
            where: {
                id: id,
            },
            include: {
                merchant: true,
            }
        }); 

        if(!product) {
            return null; 
        }

        return product; 

    } catch(error: any) {
        console.log(error);
        return null; 

    }
}

export default  async function getProductsByCategories(category: string) {
    try {
        const user = await currentUser(); 

        if(!user?.firstName) {
            return null; 
        }

        const products = await prisma.product.findMany({
            where: {
                category: category,
            },
            include: {
                merchant: true,
            }
        });

        return products; 

    } catch(error: any) {
        console.log(error); 
        return null;
    }
}