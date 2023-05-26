import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/libs/prismaDB";

export async function POST(request: Request) {
  try {
    const user = await currentUser();

    if (!user?.firstName) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const body = await request.json();

    const { ownerName, merchantId, productName, category, price, image } = body;

    const product = await prisma.product.create({
      data: {
        ownerName,
        merchantId,
        productName,
        category,
        image,
        
        price: parseInt(price, 10),
      },
    });

    return NextResponse.json(product, {
      status: 200,
    });
  } catch (err: any) {
    console.log(err);
    return new NextResponse("Internal server errro", {
      status: 500,
    });
  }
}
