"use server";

import { revalidatePath } from "next/cache";
import { createCart, getCart } from "./db/cart";
import { prisma } from "./db/prisma";

// Increase product number function
export async function incrementProductQuantity(productId: string) {
  // Create a cart only when adding products
  const cart = (await getCart()) ?? (await createCart());

  // Check if item it's already in the cart

  const articleInCart = cart.items.find((item) => item.productId === productId);

  // If article exists, update the quantity instead of adding same article
  if (articleInCart) {
    await prisma.cartItem.update({
      where: { id: articleInCart.id },
      data: { quantity: { increment: 1 } },
    });
    // If article doesnt exist in Cart, create it
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }

  revalidatePath("/products/[id]");
}
