import { cookies } from "next/headers";
import { prisma } from "./prisma";

export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  // Use cookies for cart
  (await cookies()).set("localCartId", newCart.id);
}
