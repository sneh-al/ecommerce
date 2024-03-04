import { Button, Link } from "@nextui-org/react";

const Notfound = () => {
  return (
    <section className="h-full flex justify-center  items-center">
      <article className=" flex gap-6 flex-col m-auto py-24 md:flex-row items-center justify-center px-5 ">
        <div className="max-w-md flex-col flex gap-7">
          <div className="text-5xl font-dark font-bold">
            Uppsss...
            <strong> 404 </strong>
          </div>

          <p className="text-2xl md:text-3xl font-light leading-normal">
            <strong>Page Not Found</strong>
          </p>

          <p className="mt-auto">
            Check if  term is correct. If you think this is an error,
            contact support <strong>Thanks!</strong>
          </p>
            <Button as={Link}  href="/" className="w-fit " color="danger">

            Home
            </Button>
        
        </div>
      </article>
    </section>
  );
};

export default Notfound;
