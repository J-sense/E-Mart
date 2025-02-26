import { ICategory } from "@/types";
import Image from "next/image";
import React from "react";

const CategoryCard = ({ item }: { item: ICategory }) => {
  console.log(item);
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-32 bg-white">
      <Image
        src={item.icon}
        alt={item.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <span className="mt-2 text-sm font-semibold">{item.name}</span>
    </div>
  );
};

export default CategoryCard;
