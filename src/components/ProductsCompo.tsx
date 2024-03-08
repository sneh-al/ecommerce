import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import useGetProducts from "../hooks/useGetProducts";

const ProductsCompo = () => {
  const {data, isError, isLoading } = useGetProducts(20);

  if (isLoading) return <div>Getting Products...</div>;
  if (isError) return <div>Error retrieving Products</div>;
  return (
    <div className=" columns-1 gap-6 md:columns-3 space-y-6" >
      { data?.map((product) => (
        <Card
        as={Link}
        data-aos="flip-up"
      href={`products/${product.id}`}
        isPressable key={product.id}>
          <CardBody className="grid place-content-center ">
            <Image
              className="object-contain "
              alt={product.title}
              src={product.image}
              fallbackSrc="https://via.placeholder.com/300x200"
            />
          </CardBody>
          <CardFooter className="flex-col text-sm text-left">
    <div className="flex justify-between ">
    <p className=" text-sm font-bold  ">{product.title}</p>
            <p className="text-default-500 w-fit ">{product.price}</p>
    </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductsCompo;
