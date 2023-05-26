import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";

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