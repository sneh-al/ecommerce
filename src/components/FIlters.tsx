import { Slider, Input } from "@nextui-org/react";
import Categories from "./Categories";
import { SearchIcon } from "./SearchIcon";

const FIlters = () => {
  return (
    <section className="flex  md:flex-col p-5 py-24">
      <article>
        <h1 className="sr-only">Search</h1>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </article>
      <article>
        <h1 className="sr-only">categories</h1>
        <Categories isFilter={true} />
      </article>
      {/* <article>
        <h1 className="sr-only">Price range slider</h1>
        <Slider
        label="Price Range"
        step={1}
        maxValue={10000}
        minValue={1}
        defaultValue={[1, 500]}
        formatOptions={{ style: "currency", currency: "INR" }}
        className="max-w-md"
      />
      </article> */}
  
    </section>
  );
};

export default FIlters;
