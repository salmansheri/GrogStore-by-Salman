'use client'; 

import { FC } from  'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'; 
import axios from 'axios';
import CartItemList from './CartItemList';
import { Cart } from '@prisma/client';
import { User } from '@clerk/nextjs/dist/types/server';
import { notFound } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';


interface CartItemProps {
    user: User
  
}

const CartItem: FC<CartItemProps> = ({ user }) => {
    const queryClient = useQueryClient(); 
    
    const  { data: cartItems, isLoading, error } = useQuery({
        queryKey: ['cart', user.id], 
        queryFn: async () => {
            const { data } = await axios.get(`/api/cart?userId=${user.id}`); 
            return data; 
        }
    }); 

    

    if(error) {
        return notFound(); 
    }

    if(isLoading) {
        return (
            <div className="h-[300px] flex items-center justify-center">
                <AiOutlineLoading3Quarters className="h-20 w-20 animate-spin" />

            </div>
        )
    }

    

    

    
  return (
    <div>
        {cartItems?.map((item: Cart | null) => (
            <CartItemList 
                key={item?.id}
                data={item}

            />
        ))}
    </div>
  )
}

export default CartItem