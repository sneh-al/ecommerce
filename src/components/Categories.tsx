import useGetCategories from "../hooks/useGetCategories";
import { Card, CardHeader, CardBody, Image, Link, CardFooter } from "@nextui-org/react";

const Categories = () => {
  const { data, isError, isLoading } = useGetCategories();

  if (isLoading) return <div>Consulting the spellbook...</div>;
  if (isError) return <div>Error retrieving spells</div>;

  return (
    <section className="max-w-6xl m-auto px-10  py-36">
      <ul className="flex flex-wrap justify-center gap-6">
        {data?.map((categorie) => (
          <li key={categorie.id } className=" " data-aos="fade-up">
            <Card className="py-4 flex flex-col justify-between h-full " shadow="none"  isBlurred={false}>
         
              <CardBody className="overflow-visible h-full grid place-content-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl "
                  src={categorie.image}
                  width={270}
                  height={200}
                  isZoomed
                  fallbackSrc="https://via.placeholder.com/300x200"

                />
              </CardBody>
              <CardFooter className="pt-2 px-4 flex-col ">
                <Link className=" text-center underline" color="">
                  {categorie.name}
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
