import useGetCategories from "../hooks/useGetCategories";
import {
  Card,
  CardBody,
  Image,
  Link,
  CardFooter,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useBoundStore } from "../store/store";

const Categories = ({ isFilter }) => {
  const { isError, isLoading } = useGetCategories();

  const categories = useBoundStore((state) => state.categories);

  if (isLoading)
    return (
      <div className="grid place-content-center p-5">Getting Categories...</div>
    );
  if (isError)
    return (
      <div className="grid place-content-center p-5">
        Error retrieving Categories
      </div>
    );

  if (isFilter) {
    return <ListBoxWrapper categories={categories} />;
  }

  return (
    <section className="max-w-6xl m-auto px-10  py-36">
      <ul className="flex flex-wrap justify-center gap-6">
        {categories?.map((categorie) => (
          <li key={categorie} className=" " data-aos="fade-up">
            <Card
              className="py-4 flex flex-col justify-between h-full "
              shadow="none"
              isBlurred={false}
            >
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
                <Link className=" text-center underline capitalize" color="">
                  {categorie}
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

const ListBoxWrapper = ({ categories }) => (
  <Listbox
    aria-label="Single selection example"
    variant="flat"
    disallowEmptySelection
    selectionMode="single"
  >
    {categories?.map((categorie) => (
        <ListboxItem key={categorie} className="capitalize" >
          {categorie}
        </ListboxItem>
    ))}
  </Listbox>
);

export default Categories;
