import { Link } from "@nextui-org/react";

const Intro = () => {
  return (
    <section className="bg-bg flex flex-col md:flex-row justify-center text-balance px-10  gap-10 py-36">
      {productsArray.map((product, index) => (
        <article
          key={index}
          className="flex flex-col  text-left gap-2 md:max-w-sm"
        >
          <h2 className="text-xl md:text-2xl ">{product.title}</h2>
          <p>{product.description}</p>
          <Link 
          underline="always"
          href={product.link.href} className="btn btn-primary text-sm">
            {product.link.label}
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Intro;
const productsArray = [
  {
    title: "Unique products curated for your store ",
    description:
      "The more you shop our wholesale website, the better recommendations you’ll get.",
    link: {
      href: "#",
      label: "Unique products",
    },
  },
  {
    title: "Free returns on opening orders",
    description:
      "We'll give you a prepaid shipping label in case you'd like to send products back.",
    link: {
      href: "#",
      label: "New Arrivals",
    },
  },
  {
    title: "Shop Bestsellers",
    description: "Discover our most popular products loved by customers.",
    link: {
      href: "#bestsellers",
      label: "Bestsellers",
    },
  },
];
