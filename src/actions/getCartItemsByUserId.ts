import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";

export default async function getCartItemsByUserId() {
  try {
    const user = await currentUser();

    if (!user?.firstName) {
      return null;
    }

    const cartItems = await prisma.cart.findMany({
      where: {
        userId: user?.id,
      },
    });

    if (!cartItems) {
      return null;
    }

    return cartItems; 
  } catch (error) {
    console.log(error);
    return null;
  }
}
