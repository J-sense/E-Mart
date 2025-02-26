import AllProducts from "@/components/modules/Products";
import ProductBanner from "@/components/modules/Products/ProductsBanner";
import CategoryCard from "@/components/ui/core/Category/CategoryCard";
// import ProductCard from "@/components/ui/core/ProductCard/ProductCard";
import { getAllCategory } from "@/services/category";
import { getAllProducts } from "@/services/Product";
import { ICategory } from "@/types";

const Products = async () => {
  const { data } = await getAllCategory();
  const { data: products } = await getAllProducts();
  console.log(products);
  return (
    <div className="container mx-auto  ">
      <ProductBanner title="Product" path="home-products" />
      <div className="flex gap-3 mt-3">
        {data?.map((item: ICategory, index: string) => (
          <CategoryCard item={item} key={index} />
        ))}
      </div>
      <div>
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
