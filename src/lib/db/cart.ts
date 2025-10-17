import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { Cart, Prisma } from "@/generated/prisma";

// Tipos de datos
// Utiliza Prisma.CartGetPayLoad para crear un tipo  que coincide EXACTAMENTE
// con el resultado de una consulta a la base de datos
export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

// ShoppingCart
// Hereda todo de CartWithProducts
// Y Añade dos campos calculados que no existen en al base de datos:
// - size
// - subtotal
export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

// En resumen:
// CartWithProducts representa los datos crudos de la base de datos
// ShoppingCart representa los datos enriquecidos que usará tu aplicación.

export async function getCart(): Promise<ShoppingCart | null> {
  // La lógica para obtener el ID de la cookie y buscar en la BD es la misma.
  const localCartId = (await cookies()).get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

  // Si no se encontró un carrito en la base de datos, devuelve null.
  if (!cart) {
    return null;
  }

  // En lugar de devolver el carrito tal cual, creamos un nuevo objeto
  // que cumple con el tipo 'ShoppingCart'.
  return {
    ...cart, // 1. Copia todas las propiedades del carrito de la BD (id, items, etc.)

    // 2. Calcula 'size':
    //    .reduce() suma los valores de un array.
    //    Suma la 'quantity' de cada 'item' para obtener el total de productos.
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),

    // 3. Calcula 'subtotal':
    //    Suma el resultado de (cantidad del item * precio del producto) para cada item.
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
}

export async function createCart(): Promise<ShoppingCart> {
  // La creación del carrito en la base de datos es la misma.
  const newCart = await prisma.cart.create({
    data: {},
  });

  // Use cookies for cart
  // Note: Needs encryption + secure settings in real production application
  (await cookies()).set("localCartId", newCart.id);

  // DEVUELVE UN OBJETO 'ShoppingCart'
  // Un carrito nuevo está vacío, por lo que los valores son predecibles.
  return {
    ...newCart, // Copia las propiedades del nuevo carrito (id, createdAt, etc.)
    items: [], // Un carrito nuevo no tiene items.
    size: 0, // El tamaño es 0.
    subtotal: 0, // El subtotal es 0.
  };
}
