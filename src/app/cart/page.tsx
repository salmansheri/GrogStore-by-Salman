import getCartItemsByUserId from "@/actions/getCartItemsByUserId"
import CartItem from "./CartItem";
import { currentUser } from "@clerk/nextjs";


export default async function CartPage() {
    const user = await currentUser(); 
    

    return(
        <div className="px-5 lg:px-52">
            <div className="p-5">
                <h1 className="text-4xl font-bold">Your Cart</h1>
            </div>
            <div>

                <CartItem  
                    user={user!}

                />
             
            </div>
            
        </div>
    )
}