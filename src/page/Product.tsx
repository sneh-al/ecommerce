import { useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useBoundStore } from "../store/store";

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isError, isLoading } = useGetProduct(id);
    const cart = useBoundStore((state) => state.cart);
  const addItem = useBoundStore((state) => state.addItem);
  const increaseItemQuantity = useBoundStore((state) => state.increaseItemQuantity);


  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) return <div>Getting Products...</div>;
  if (isError) return <div>Error retrieving Products</div>;

  const addProduct = () => {
    const cheIsExist = () => cart.some((prod) => prod.id == id);
    const isExist = cheIsExist();
    console.log(isExist);
    if (isExist) {
      return increaseItemQuantity(id);
    }
    data.quantity = 1;
    addItem(data);
  };

  return (
    <section>
      <header className="flex gap-3 items-center p-5 bg-accent2 ">
        <Button
          startContent={<FaArrowLeft />}
          onPress={goBack}
          className="font-semibold"
        >
          Go Back
        </Button>
        <h3 className=" ">{data.title}</h3>
      </header>
      <div className="py-12 grid place-content-center p-5">
        <Card isBlurred className="w-fit max-w-4xl " shadow="sm">
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center  ">
              <div className="relative col-span-6 md:col-span-4 mix-blend-multiple  ">
                <Image
                  alt="Album cover"
                  className="object-contain mix-blend-multiply max-h-96 bg-transparent"
                  height={200}
                  src={data.image}
                  width="100%"
                />
              </div>

              <div className="flex flex-col gap-6 col-span-6 md:col-span-8 max-w-prose ">
                <div className="flex flex-col gap-3">
                  {" "}
                  <h3 className="font-bold text-xl ">{data.title}</h3>
                  <Chip size="sm" variant="bordered" className="">
                    {data.category}
                  </Chip>
                </div>
                <h1 className="my-auto text-sm ">{data.description}</h1>
                <div className="mt-auto flex-wrap gap-3 flex justify-between">
                  <h1 className="  flex flex-col ">
                    <span className="">Price</span>{" "}
                    <span className="text-large font-medium">{data.price}</span>
                  </h1>

                  <Button
                    className=""
                    type="submit"
                    radius="full"
                    variant="solid"
                    onPress={addProduct}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Product;
