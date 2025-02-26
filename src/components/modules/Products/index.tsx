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
      <div className="flex justify-between my-8 gap-8">
        <div>
          <FilterSidebar />
        </div>
        <div className="grid grid-cols-3 gap-8 h-64">
          {products.map((product: IProduct, idx: number) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
