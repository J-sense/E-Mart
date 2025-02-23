import ManageCategory from "@/components/modules/shop/category";
import { getAllCategory } from "@/services/category";

const CreateProduct = async () => {
  const { data } = await getAllCategory();
  console.log(data);
  return (
    <div className="p-5">
      <ManageCategory categories={data} />
    </div>
  );
};

export default CreateProduct;
