'use client'; 

import React from 'react'; 
import { IoLocationSharp } from 'react-icons/io5'; 
import { useRouter } from 'next/navigation'; 

interface ShopItemProps {
    merchant: Record<string, any>; 
}

const ShopItem: React.FC<ShopItemProps> = ({
    merchant
}) => {
    const router = useRouter(); 
  return (
    <div className="border flex flex-row space-x-5 rounded-md shadow-md bg-gray-500/5 h-auto w-auto cursor-pointer hover:scale-110 transition-all duration-1000 ease-in-out" onClick={() => router.push(`/products/${merchant?.id}`)}>
        <div className="h-28 w-28 relative">
            
            

        </div>
        <div className="p-5 flex flex-col space-y-3">
            <h4 className='text-xl font-medium'>{merchant?.shopName}</h4>
            <p>{merchant?.city}</p>
            <p className="flex flex-row items-center text-myGreen">
                <IoLocationSharp />
                {merchant?.shopAddress}
                </p>

        </div>
    </div>
  )
}

export default ShopItem