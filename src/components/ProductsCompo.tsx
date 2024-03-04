import { Card, CardBody, CardFooter } from '@nextui-org/react';
import useGetProducts from '../hooks/useGetProduct';
import { useBoundStore } from '../store/store';

const ProductsCompo = () => {
    const { isError, isLoading } = useGetProducts();
    const products = useBoundStore((state) => state.products);
    console.log(products)
  
    if (isLoading) return <div>Consulting the spellbook...</div>;
    if (isError) return <div>Error retrieving spells</div>;
  
  return (
<div
className=' columns-2 gap-6 md:columns-3 space-y-6'
>     {products?.map((product) => (
          <Card
          isPressable
            key={product.id}
          >
            <CardBody className="grid place-content-center ">
           <img
                className='object-contain'
                alt={product.title}
                src={product.image}
                fallbackSrc="https://via.placeholder.com/300x200"
              />
            </CardBody>
            <CardFooter className="text-small  justify-between">
              <b className="  max-w-20 truncate ">{product.title}</b>
              <p className="text-default-500 w-fit ">{product.price}</p>
            </CardFooter>
          </Card>
        ))}</div>
  )
}

export default ProductsCompo