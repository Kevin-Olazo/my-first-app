import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add product",
};

async function createProduct(formData: FormData) {
  "use server";

  // Get product inputs
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  const stock = Number(formData.get("stock") || 0);

  // Validate input are not empty
  if (!name || !description || !imageUrl || !price || !stock) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price, stock },
  });

  redirect("/add-product");
}

const AddProductPage = () => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Add product</h1>
      <form action={createProduct}>
        {/* Product name */}
        <input
          type="text"
          name="name"
          placeholder="Product name"
          className="input mb-3 w-full"
          required
        />
        {/* Product Description */}
        <textarea
          name="description"
          placeholder="Product description"
          required
          className="textarea mb-3 w-full"
        />
        {/* Product image */}
        <input
          required
          name="imageUrl"
          type="url"
          placeholder="image URL"
          className="input mb-3 w-full"
        />
        {/* Product price */}
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="input mb-3 w-full"
          step="0.01"
        />
        <input
          required
          name="stock"
          type="number"
          placeholder="Stock"
          className="input mb-3 w-full"
          step="0.01"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;
