import zustandlogo from "../assets/zustand.png";
import reactQuerylogo from "../assets/ReactQuery.png";
import axioslogo from "../assets/axios.svg";
import { Link } from "@nextui-org/react";

const ReactQuery = () => {
  return (
    <section className=" query-bg p-5 py-24">
      <div className="grid text-background grid-cols-1 place-content-center query-bg m-auto max-w-6xl  md:grid-cols-2  gap-6">
        <article
          className="m-auto h-fit order-2 md:order-1"
          data-aos="flip-down"
        >
          <p>
            <Link
              href="https://tanstack.com/query/latest/docs/framework/react/overview"
              underline="always"
              isExternal
            >
              React Query
            </Link>{" "}
            conducts seamless data-fetching, making asynchronous operations a
            breeze with smart caching.
            <Link href="https://axios-http.com/" underline="always" isExternal>
              Axios
            </Link>{" "}
            joins the ensemble, harmonizing API communication for a smooth
            exchange of requests and responses. Finally, meet{" "}
            <Link
              href="https://zustand-demo.pmnd.rs/"
              underline="always"
              isExternal
            >
              Zustand
            </Link>{" "}
            , the minimalist maestro, simplifying global state management in
            React applications. Together, they form a powerhouse trio,
            orchestrating web development with efficiency and simplicity.
          </p>
        </article>
        <article className="flex items-start flex-col order-1 md:order-2">
          <div className="flex flex-wrap items-center justify-center ">
            <img
              data-aos="flip-up"
              className="w-44 "
              src={reactQuerylogo}
              alt="react query logo"
            />
            <img data-aos="flip-down" src={axioslogo} alt="axios logo" />
            <img
              data-aos="flip-up"
              className="w-24"
              src={zustandlogo}
              alt="zustand logo"
            />
          </div>
          <h1 className="text text-2xl md:text-5xl" data-aos="zoom-in-down">
            React Query, Axios, and Zustand: The Power Trio of Web Efficiency!
          </h1>
        </article>
      </div>
    </section>
  );
};

export default ReactQuery;
