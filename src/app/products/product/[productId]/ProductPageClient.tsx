"use client";

import { Product } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { revalidatePath } from 'next/cache'; 

interface ProductPageClientProps {
  product: Product | null;
  
}

const ProductPageClient: React.FC<ProductPageClientProps> = ({
  product,
 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/cart", {
        productName: product?.productName,
        image: product?.image,
        price: product?.price,
        productCategory: product?.category,
      })
      .then(() => {
        toast.success("Added to Cart");
        revalidatePath("/cart")
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [product?.productName, product?.image, product?.price, product?.category]);


  return (
    <div className="flex flex-row">
      <div className="basis-1/2 flex items-center justify-center">
        <Image
          src={product?.image as string}
          alt={product?.productName as string}
          width={500}
          height={500}
        />
      </div>
      <div className="basis-1/2">
        <div className="my-10">
          <h1 className="text-5xl font-bold text-gray-500">
            {product?.productName}
          </h1>
          <p>{product?.price} Rs</p>
          <p className="text-white text-xs bg-myGreen  rounded-full flex items-center justify-center w-[20%] mt-5">
            {product?.category}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-white bg-black px-4 py-1 rounded-md">
            About Merchant
          </h1>
          {/* @ts-ignore  */}
          <p>{product?.merchant?.name}</p>

          {/* @ts-ignore  */}
          <p>{product?.merchant?.shopName}</p>
          {/* @ts-ignore  */}
          <p>{product?.merchant?.shopAddress}</p>
        </div>
        <div>
          <button
            className="bg-lightGreen text-white hover:bg-opacity-80 px-4 py-2 rounded-full mt-3"
            onClick={handleClick}
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageClient;
