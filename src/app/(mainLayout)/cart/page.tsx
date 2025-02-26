// import CartProducts from "@/components/modules/cart/CartProductCard";
import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
// import Coupon from "@/components/modules/cart/Coupon";
import ProductBanner from "@/components/modules/Products/ProductsBanner";
// import ProductBanner from "@/components/modules/products/banner";
// import NMContainer from "@/components/ui/core/NMContainer";

const CartPage = () => {
  return (
    <div className="container">
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
      </div>
    </div>
  );
};

export default CartPage;
