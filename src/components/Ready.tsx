import { Button,Link } from '@nextui-org/react';

const Ready = () => {
  return (
    <section className='bg-ready bg-no-repeat bg-cover bg-center text-center ' data-aos="flip-up">
      <article className='bg-accent2 bg-opacity-50 m-auto ' >
      <div className="max-w-6xl m-auto flex flex-col items-center justify-center gap-3 p-10 py-24">
      <h1 className='text text-2xl md:text-5xl'>Ready to start ordering online?</h1>
       <p>ONLINE SHOPPING : OPTIONS UNLIMITED</p>
       <Button variant="solid" color="primary">Sign up</Button>
       <Link underline="always" href="/">Sign in</Link>
      </div>
      </article>
    </section>
  )
}

export default Ready