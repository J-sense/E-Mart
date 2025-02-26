// import ProductCard from "@/components/ui/core/ProductCard/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import React from "react";
import FilterSidebar from "./FillterSidebar";
// import CartProductCard from "../cart/CartProductCard";
import ProductCard from "@/components/ui/core/ProductCard/ProductCard";
// { products }: { products: IProduct }
const AllProducts = async () => {
  const { data: products } = await getAllProducts();
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <FilterSidebar />
        </div>
        <div>
          {products.map((product: IProduct, idx: number) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
