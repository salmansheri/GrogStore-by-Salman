'use client'; 

import { Product } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'; 

interface ProductsItemsProps {
    product?: Product | null
}

const ProductsItem: React.FC<ProductsItemsProps> = ({
    product
}) => {
    const router = useRouter(); 
  return (
    <div className="h-auto  border cursor-pointer" onClick={() => router.push(`/products/product/${product?.id}`)}>
        <div className='h-52 w-52 relative'>

            <Image 
                src={product?.image as string}
                alt={product?.productName as string}
                fill
                className="object-cover hover:scale-110 transition ease-linear duration-500"
            />
            
        </div>
        <div className="p-5">
            <h1 className="text-3xl font-semibold">{product?.productName}</h1>
            <p>{product?.price} Rs</p>
            <p className="flex items-center justify-center  rounded-full py-1 w-[50%] text-white bg-myGreen text-xs my-3">{product?.category}</p>
        </div>
    </div>
  )
}

export default ProductsItem