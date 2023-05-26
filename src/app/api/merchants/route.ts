import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

import prisma from "@/libs/prismaDB";

export async function POST(request: Request) {
  try {
    const user = await currentUser();
    console.log(user?.id);

    if (!user?.firstName) {
      return new NextResponse("unauthorized", {
        status: 401,
      });
    }

    const body = await request.json();

    const { name, email, shopName, shopAddress, city } = body;

    const merchant = await prisma.merchant.create({
      data: {
        name,
        email,
        shopName,
        shopAddress,
        city,
        userId: user?.id as string,
      },
    });

    if (!merchant) {
      return new NextResponse("Cannot create merchant");
    }

    return NextResponse.json(merchant, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
