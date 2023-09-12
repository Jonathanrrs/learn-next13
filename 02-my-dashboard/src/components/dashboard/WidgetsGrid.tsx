"use client";
import { IoAirplane } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        href={"/dashboard/counter"}
        label={"Contador"}
        subTitle="Carrito de compras"
        icon={<IoAirplane size={50} className="text-blue-500" />}
      />
    </div>
  );
};
