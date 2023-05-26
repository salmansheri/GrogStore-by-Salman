import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";

export default async function getMerchantsByCity(city: string) {
    try {
        const user = await currentUser(); 

        if(!user?.firstName) {
            return null; 
        }

        const merchants = await prisma.merchant.findMany({
            where: {
                city: city
            },
            include: {
                products: true,
            }
        }); 

        return merchants; 

    } catch(error: any) {
        console.log(error); 
        return null; 
    }
}