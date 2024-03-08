import useGetCategories from "../hooks/useGetCategories";
import {
  Card,
  CardBody,
  Image,
  Link,
  CardFooter,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useBoundStore } from "../store/store";
import { useEffect, useMemo, useState } from "react";
const images = [
  "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1674986174314-c30a91ef8a13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Categories = ({ isFilter }:{isFilter :boolean}) => {
  const {data, isError, isLoading } = useGetCategories();
  const addCategories = useBoundStore((state) => state.addCategories);


useEffect(() => {
  addCategories(data)
},[data,addCategories])
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
    return <ListBoxWrapper categories={data} />;
  }

  return (
    <section className="max-w-2xl m-auto px-10  py-36">
      <ul className="grid grid-cols-1 md:grid-cols-2 justify-center ">
        {data?.map((categorie, i) => (
          <li key={categorie} className="overflow-hidden" data-aos="fade-up">
            <Card
              className="py-4 flex flex-col justify-between "
              shadow="none"
              isBlurred={false}
            >
              <CardBody className="overflow-visible h-full grid place-content-center">
                <Image
                  alt="Card background"
                  className="object-cover object-center h-64  "
                  src={images[i]}
                  width={300}
                  height={300}
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

const ListBoxWrapper = ({ categories }:{categories: string[]}) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const filterProducts = useBoundStore((state) => state?.filterProducts);

  const selectedValue = useMemo(() => {
    const cat = Array.from(selectedKeys).join(", ");
    if (cat.length > 1) {
      filterProducts(cat);
    }
    return cat;
  }, [selectedKeys]);

  return (
    <Listbox
      aria-label="Single selection example"
      variant="flat"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      {categories?.map((categorie) => (
        <ListboxItem key={categorie} className="capitalize">
          {categorie}
        </ListboxItem>
      ))}
    </Listbox>
  );
};

export default Categories;
