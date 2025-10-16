import { prisma } from "@/lib/db/prisma";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await prisma.product.findUnique({ where: { id } });

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      {/* Add other product details here */}
    </div>
  );
};

export default ProductPage;
