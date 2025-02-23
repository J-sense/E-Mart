import Products from "@/components/modules/shop/products/Products";
import { getAllProducts } from "@/services/Product";

const page = async () => {
  const categories = await getAllProducts();
  return (
    <div className="p-5">
      <Products categories={categories.data} />
    </div>
  );
};

export default page;
