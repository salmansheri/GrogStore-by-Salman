import prisma from "@/libs/prismaDB";
import { currentUser } from "@clerk/nextjs";

export async function GET(request: Request) {
  try {
    const user = await currentUser();

    !user &&
      new Response("UnAuthorized", {
        status: 402,
      });

    const orders = await prisma.order.findMany({
      where: {
        userId: user?.id,
      },
    });

    return new Response(JSON.stringify(orders), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
export async function POST(request: Request) {
  try {
    const user = await currentUser();

    !user &&
      new Response("UnAuthorized", {
        status: 402,
      });

    const body = await request.json();

    const { title, quantity, price, image } = body;

    const orders = await prisma.order.create({
      data: {
        productName: title,
        price,
        Image: image,
        userId: user?.id!,
        quantity,
      },
    });

    return new Response(JSON.stringify(orders), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
