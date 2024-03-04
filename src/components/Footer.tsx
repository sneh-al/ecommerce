import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className=" body-font ">
      <div className="max-w-6xl m-auto gap-6  px-5 py-24 flex justify-evenly  items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="max-w-md text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/logo.png" alt="Platzi Store" className="w-12 h-12" />
            <span className="ml-3 text-xl">Fake Store</span>
          </a>

          <p className="mt-2 text-sm text-gray-500">
            {" "}
            Explore our cutting-edge site built with React.js, React Query,
            Zustand, and NextUI from nextui.org. Enjoy dynamic interfaces and
            seamless data sourced from the  Fake Store API. Welcome to the
            forefront of modern web development.
          </p>
        </div>
        <div className=" flex gap-6 flex-col md:flex-row flex-wrap  md:mt-0 mt-10 text-left ">
          <div className="flex flex-col  justify-center ">
            <h2 className="title-font font-medium text-accent tracking-widest  mb-3">
              Links
            </h2>
            <nav className="list-none flex flex-col">
              {["home", "about", "products"].map((link) => (
                <Link key={link} underline="always" className="capitalize" href={link}>
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col  justify-center ">
            <h2 className="title-font font-medium text-accent tracking-widest mb-3">
              Other Links
            </h2>
            <nav className="list-none flex flex-col">
              {linksArray.map((link,i) => (
                <Link key={i} color="secondary" underline="hover" href={link.url}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col  justify-center ">
            <h2 className="title-font font-medium text-accent tracking-widest  mb-3">
              Links
            </h2>
            <nav className="list-none flex flex-col">
              {linksArray.map((link) => (
                <Link key={link.url} color="secondary" underline="hover" href={link.url}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-accent2">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Fake Store —
            <a
              href="https://sneh-al.github.com"
              rel="noopener noreferrer"
              className="text-accent ml-1"
              target="_blank"
            >
              @sneh-al
            </a>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const linksArray = [
  { name: "First Link", url: "#" },
  { name: "Second Link", url: "$" },
  { name: "Third Link", url: "%" },
];
