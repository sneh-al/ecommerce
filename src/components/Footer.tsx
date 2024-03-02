import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className=" body-font ">
      <div className="max-w-6xl m-auto gap-6  px-5 py-24 flex justify-evenly  items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="max-w-md text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/logo.png" alt="Platzi Store" className="w-12 h-12" />
            <span className="ml-3 text-xl">Platzi Store</span>
          </a>

          <p className="mt-2 text-sm text-gray-500">
            {" "}
            Explore our cutting-edge site built with React.js, React Query,
            Zustand, and NextUI from nextui.org. Enjoy dynamic interfaces and
            seamless data sourced from the Platzi Fake Store API. Welcome to the
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
                <Link underline="always" className="capitalize" href={link}>
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
              {linksArray.map((link) => (
                <Link color="secondary" underline="hover" href={link.url}>
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
                <Link color="secondary" underline="hover" href={link.url}>
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
            © 2024 Platzi Store —
            <a
              href="https://sneh-al.github.com"
              rel="noopener noreferrer"
              className="text-accent ml-1"
              target="_blank"
            >
              @sneh-al
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const linksArray = [
  { name: "First Link", url: "" },
  { name: "Second Link", url: "" },
  { name: "Third Link", url: "" },
];
