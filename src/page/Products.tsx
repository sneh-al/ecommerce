import FIlters from "../components/FIlters";
import ProductsCompo from "../components/ProductsCompo";

const Products = () => {

  return (
    <div className="md:max-w-7xl m-auto ">
  <div className=" flex flex-col  md:flex-row  gap-3">
  <div className="">
        <FIlters />
      </div>
      <div className="py-24 p-5">
        <ProductsCompo/>
      </div>
  </div>
    </div>
  );
};

export default Products;
