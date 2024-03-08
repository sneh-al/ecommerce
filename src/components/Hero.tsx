
import { Button, Image } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';
import Login from './Login';
const Hero = () => {
  return (
    <section className='relative flex  overflow-hidden bg-hero bg-no-repeat bg-center bg-opacity-5  bg-cover    gap-10 '>
        <article className='  h-screen p-5  w-full bg-accent2 bg-opacity-50  grid place-content-center text-center gap-2 md:gap-4 py-36'>
            <h1 className='text text-2xl md:text-5xl' data-aos="fade-up" >Your Ultimate Wholesale Marketplace</h1>
        <p className='md:text-xl'  data-aos="fade-down">Discover  <span className='font-bold '>unique</span> brands, all in one place</p>
            <Button  data-aos="fade-up" className='w-fit m-auto ' variant="solid" endContent={<FaArrowRight/>} >Explore Now</Button>
        </article>
    </section>
  )
}

export default Hero