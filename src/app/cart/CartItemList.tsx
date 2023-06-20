'use client'; 

import { Cart } from '@prisma/client';
import Image from 'next/image';
import { FC, useState } from 'react'; 
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation'; 
import { AiOutlineLoading3Quarters, AiFillDelete } from 'react-icons/ai'; 
import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

interface CartItemListProps {
    data: Cart | null; 
  
}

const CartItemList: FC<CartItemListProps> = ({ data }) => {
    const router = useRouter(); 
    const id = data?.id
    console.log(data?.quantity)
    const [quantityCount, setQuantityCount] = useState(data?.quantity); 

    const queryClient = useQueryClient(); 
    var price = data?.price! * data?.quantity!; 

    const { mutate:orderProduct, isLoading: isOrdering } = useMutation({
        mutationFn: async () => {
            const payload = {
                title: data?.productName, 
                quantity: data?.quantity, 
                price: data?.price, 
                image: data?.image, 

            }
            await axios.post("/api/order", payload); 
        }, 
        onError: (error: any) => {
            alert("something went wrong")

        }, 
        onSuccess: () => {
            queryClient.invalidateQueries(['orders']); 
            router.push(`/orders/${data?.userId}`); 
        }
    })

    const { mutate: deleteCartItem, isLoading: isDeletingCartItem } = useMutation({
        mutationFn: async() => {
            const { data } = await axios.delete(`/api/cart/${id}`); 

            return data; 

        }, 
        onError: (error: any) => {
            if(error instanceof AxiosError) {
                if(error.response?.status === 402) {
                    toast.error("You are not allow to delete the cart item of the User")
                }

                if(error.response?.status===500) {
                    toast.error("Server error"); 
                }
            }

            if(error) {
                toast.error("Something went wrong")
                
            }

        },
        onSuccess: () => {
            queryClient.invalidateQueries(['cart']); 
            toast.success("Deleted successfully")

        }
    })

    const { mutate: updateCartItemQuantity, isLoading: isUpdatingCartItemQuantity  } = useMutation({
        mutationFn: async(count) => {

            const payload = {
                quantity: count, 
                price: price, 
            }
            await axios.patch(`/api/cart/${id}`, payload); 
        }, 
        onError: (error: any) => {
            toast.error("Update unsuccessfull")

        }, 
        onSuccess:() => {
            queryClient.invalidateQueries(['cart']); 

        }

    }); 

  

    const incrementQuantity = () => {
        setQuantityCount(quantityCount => quantityCount! + 1); 
        // @ts-ignore
        updateCartItemQuantity(quantityCount)

    }

    const decrementQuantity = () => {
        setQuantityCount(quantityCount => quantityCount! - 1); 
        // @ts-ignore 
        updateCartItemQuantity(quantityCount); 
    }
  return (
    <div className="flex flex-row w-full my-5 border border-gray-200 rounded-md bg-white/5 shadow">
        <div>
            <Image 
                src={data?.image!}
                alt={data?.productName!}
                width={300}
                height={300}
            />
        </div>
        <div className="w-full py-3 flex">

        <div className="max-w-[50%] mx-auto flex flex-col space-y-5">
            <h1 className="text-2xl font-bold">{data?.productName}</h1>
            <p className="text-xl font-semibold">{price}</p>
            <div className="flex flex-row space-x-2 text-xl border border-gray-500 rounded-full justify-between px-3 cursor-pointer items-center w-fit">
                <span onClick={decrementQuantity}>-</span>
                <span>{data?.quantity}</span>
                <span onClick={incrementQuantity}>+</span>
            </div>
            
        </div>
        <div className="flex p-5 flex-col justify-between">
            {isDeletingCartItem ? ( <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin" />): (

            <AiFillDelete className="h-10 w-10 text-red-500 cursor-pointer" onClick={() => deleteCartItem()}  />
            )}

            <button className="inline-flex items-center h-11 px-4 rounded-md border shadow text-white bg-myGreen hover:bg-myGreen/80 disabled:cursor-not-allowed disabled:bg-myGreen/90 " onClick={() => orderProduct()}>{isOrdering ? (<AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />): "Order"}</button>
            
        </div>
        </div>
    </div>
  )
   
}

export default CartItemList