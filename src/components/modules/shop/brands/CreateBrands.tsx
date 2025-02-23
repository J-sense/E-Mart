import CreateBrandModel from "./CreateBrandModel";

const CreateBrands = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <h1>Manage Brands</h1>
        <CreateBrandModel />
      </div>
      <div></div>
    </div>
  );
};

export default CreateBrands;
