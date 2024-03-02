
import { Link } from '@nextui-org/react';

const Intro2 = () => {
  return (
    <section className='bg-accent2'>
    <div className='max-w-6xl grid grid-cols-1 m-auto md:grid-cols-2  px-10  gap-10 py-36'>
  <h1 className='text text-2xl md:text-5xl' data-aos="zoom-in-down">We believe the future of retail is local.</h1>
       <article className='flex flex-col gap-3' data-aos="zoom-in-left">
       <p>Explore our cutting-edge website powered by React.js, React Query, Zustand, and the sleek NextUI framework from nextui.org. With React.js at the core, we offer dynamic interfaces, seamless data management, and clean state control. This fusion ensures optimal performance, delivering a smooth, efficient, and visually compelling user experience. Welcome to innovation and functionality in modern web development.</p>
       <Link underline="always" href="/about">About us</Link>
       </article>
  </div>
       
    </section>
  )
}

export default Intro2