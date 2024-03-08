import useGetProducts from "../hooks/useGetProducts";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import Slider from "react-slick";
import { useBoundStore } from "../store/store";

const ReccentlyAdded = () => {
  const {data, isError, isLoading } = useGetProducts(5);
  const products = useBoundStore((state) => state.products);

  if (isLoading) return <div>Consulting the spellbook...</div>;
  if (isError) return <div>Error retrieving spells</div>;

  return (
    <section className="max-w-6xl m-auto overflow-hidden p-10 flex flex-col gap-6 py-24  ">
      <header
        data-aos="fade-down"
        className="flex justify-between items-center  gap-6 flex-wrap"
      >
        <h2 className="text-xl md:text-2xl ">Reccently Added</h2>
        <Link underline="always" href="/products" className="text-sm">
          View All
        </Link>
      </header>
      <Slider data-aos="fade-up" {...settings} className="bg-transparnt p-5">
        {data?.map((product) => (
          <Card
            radius="lg"
            className="border-none"
            key={product.id}
          >
            <CardBody className=" p-0">
            
              <Image
                isZoomed
                width="100%"
                alt={product.title}
                className=" object-contain h-64"
                src={product.image}
                fallbackSrc="https://via.placeholder.com/300x200"
              />
            </CardBody>
            <CardFooter className="text-small  justify-between">
              <b className=" max-w-44 truncate ">{product.title}</b>
              <p className="text-default-500 w-fit ">{product.price}</p>
            </CardFooter>
          </Card>
        ))}
      </Slider>
    </section>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  initialSlide: 0,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default ReccentlyAdded;
