import reactHookformLogo from "../assets/reacthookform.svg";
import zodLogo from "../assets/zod.svg";

const ReactHookForm = () => {
  return (
    <section className=" zod-bg grid place-content-center p-5 py-24  ">
    <div className="max-w-6xl min-h-screen m-auto grid place-content-center text-background grid-cols-1  md:grid-cols-2  gap-6 ">
     <article className="flex flex-col gap-6">
        <div className="flex gap-6 flex-wrap ">
          <img
            className="w-16 "
            src={reactHookformLogo}
            alt="react query logo"
            data-aos="flip-down"
          />
          <img 
data-aos="flip-up" 
          
          src={zodLogo} alt="axios logo"  className="w-16"/>
        </div>
        <h1 className="text text-2xl md:text-5xl" data-aos="zoom-in-down">
          Zod & React Hook Form: Masterful Form Handling!
        </h1>
      </article>
      <article className="flex gap-6 flex-col">
        <p data-aos="fade-up">
          Zod leads as the validation virtuoso, simplifying form validation with
          an intuitive schema-based approach. Joining the act is React Hook
          Form, the nimble partner managing the form lifecycle seamlessly. With
          a hook-based structure, it simplifies form state, validation, and
          submission—creating a harmonious experience for React developers.
          Together, they form a formidable duo, streamlining form creation into
          a well-coordinated performance, ensuring data accuracy and a smooth
          user interaction.
        </p>
      </article>
      </div>
    </section>
  );
};

export default ReactHookForm;
