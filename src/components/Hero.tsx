
import { Button } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Hero = () => {
  return (
    <article className='relative  overflow-hidden'>
        <LazyLoadImage className="lg:h-[70vh] object-cover object-center opacity-45" src="hero.jpg" alt="Platzi Store" width="100%"  />
        <div className='absolute h-full w-full p-5  top-0 left-0  grid place-content-center text-center gap-2 md:gap-4'>
            <h1 className='text text-2xl md:text-5xl'>Your Ultimate Wholesale Marketplace</h1>
        <p className='md:text-xl'>Discover  <span className='font-bold '>unique</span> brands, all in one place</p>
            <Button className='w-fit m-auto ' variant="solid" endContent={<FaArrowRight/>} >Explore Now</Button>
        </div>
    </article>
  )
}

export default Hero