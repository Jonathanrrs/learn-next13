import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";

/* snippet mr */
export const metadata: Metadata = {
  title: "Shopping cart",
  description: "Simple shopping cart",
};

/* snippet prc */
export default function CounterPage() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={7} />
    </div>
  );
}
