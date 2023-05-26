import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";

export async function getMerchants() {
  try {
    const user = await currentUser();

    if (!user?.firstName) {
      return null;
    }

    const merchants = await prisma.merchant.findMany();

    if (!merchants) {
      return null;
    }

    return merchants;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function getMerchantsById(id: string) {
  try {
    const user = await currentUser();

    if (!user?.firstName) {
      return null;
    }

    const merchant = await prisma.merchant.findUnique({
      where: {
        id: id,
      },
      include: {
        products: true,
      }
    });

    if (!merchant) {
      return null;
    }

    return merchant;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function getMerchantsByUserId(userId: string) {
  try {
    const user = await currentUser();
    if (!user?.firstName) {
      return null;
    }

    const merchant = await prisma.merchant.findUnique({
      where: {
        userId: userId,
      },
    });

    return merchant;
  } catch (error: any) {
    console.log(error);
  }
}
