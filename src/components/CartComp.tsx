import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";
import { useBoundStore } from "../store/store";
import { PiMinusThin, PiPlusThin } from "react-icons/pi";

const CartComp = ({ cart }) => {
  const increaseItemQuantity = useBoundStore(
    (state) => state.increaseItemQuantity
  );
  const decreaseItemQuantity = useBoundStore(
    (state) => state.decreaseItemQuantity
  );

  return (
    <div className="grid gap-6 place-content-center p-10">
      {cart.map((cartItem) => (
        <Card
          key={cartItem.id}
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-5xl"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-contain h-64"
                  height={200}
                  shadow="md"
                  src={cartItem.image}
                  width="100%"
                />
              </div>

              <div className="flex flex-col gap-6 col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <Link
                      href={`products/${cartItem.id}`}
                      className="text-large font-medium mt-2"
                    >
                      {cartItem.title}
                    </Link>
                    <p className="text-small text-foreground/80">
                      {cartItem.price}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="w-full ">
                    <Button
                      isIconOnly
                      variant="faded"
                      aria-label="Decrease Quantity"
                      disabled={cartItem.quantity === 0 ? true : false}
                      onClick={() => decreaseItemQuantity(cartItem.id)}
                    >
                      <PiMinusThin />
                    </Button>
                    <span>{cartItem.quantity}</span>
                    <Button
                      isIconOnly
                      variant="faded"
                      aria-label="Increase Quantity"
                      onPress={() => increaseItemQuantity(cartItem.id)}
                    >
                      <PiPlusThin />
                    </Button>
                  </div>
                  <div>
                    <p className="font-semibold">Total</p>
                    {(cartItem.price * cartItem.quantity).toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CartComp;
