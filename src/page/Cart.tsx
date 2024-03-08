import { FaBagShopping } from "react-icons/fa6";
import CartComp from "../components/CartComp";
import EmptyCart from "../components/EmptyCart";
import { useBoundStore } from "../store/store";
import { Button } from "@nextui-org/react";

const Cart = () => {
  const cart = useBoundStore((state) => state.cart);
  const clearCart = useBoundStore((state) => state.clearCart);

  console.log(cart)

  return (
    <div className="min-h-screen ">
             <header className="flex items-center justify-between place-content-center bg-accent2  p-10 ">
             <Button onPress={clearCart} variant="solid" className="" color="danger">
        Clear Cart
      </Button>
            <h1 className="flex text-4xl gap-3 m-auto">My Cart <FaBagShopping/></h1>
           

       
        
      <Button href="/checkout" onPress={clearCart} variant="solid" color="danger">
        Check out
      </Button>
        </header>
   
      {cart?.length === 0 ? (
        <EmptyCart/>
      ) : (
        <CartComp cart={cart}/>
      )}
    </div>
  );
};

export default Cart;
