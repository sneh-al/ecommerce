
import { Link } from '@nextui-org/react';

const Platzi = () => {
  return (
    <section className="grid text-center text-pretty text-background grid-cols-1 platzi-bg m-auto  flex-col-reverse md:flex-row gap-6 p-5 py-24">
      <article className="max-w-xl m-auto">
        <div className="flex flex-col  items-center justify-center">
          <img src="/logo.png" alt="axios logo"  data-aos="zoom-in"/>
          <h1 className="text text-2xl md:text-5xl" data-aos="zoom-in-down">
        Platzi Fake Store API: Learn by Doing in E-commerce Simulation!
        </h1>
        </div>
       
      </article>
      <article className="flex gap-6 max-w-prose m-auto flex-col" data-aos="fade-down">
        <p>
            <Link href="https://fakeapi.platzi.com/" underline="always" isExternal >
            The Platzi Fake Store API
            </Link>{" "}

        is a hands-on playground for developers on Platzi's educational platform. Simulating an e-commerce environment, it offers a risk-free space to practice building and testing applications. With various endpoints, users can delve into real-world scenarios, perfecting their API integration and web development skills in a secure, educational setting.
        </p>
      </article>
    </section>
  );
};

export default Platzi;
