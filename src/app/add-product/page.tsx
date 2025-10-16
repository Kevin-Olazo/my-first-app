export const metadata = {
  title: "Add product",
};

const AddProductPage = () => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Add product</h1>
      <form action="">
        {/* Product name */}
        <input
          type="text"
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
        <button type="submit" className="btn btn-accent btn-block peer">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
