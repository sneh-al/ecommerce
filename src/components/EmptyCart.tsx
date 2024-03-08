import { Button, Image, Link } from "@nextui-org/react";
import empyCart from "../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <section className="grid place-content-center   text-center gap-6">
      <Image src={empyCart} width="100%" height="100%" />
      <h1 className="text-3xl font-semibold">Your Cart Is Empty!</h1>
      <Button
        as={Link}
        href="/products"
        color="secondary"
        size="lg"
        className="w-fit m-auto"
      >
        Continue Shopping{" "}
      </Button>
    </section>
  );
};

export default EmptyCart;
