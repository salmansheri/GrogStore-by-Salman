import { getMerchantsByUserId } from "@/actions/getMerchants";
import Form from "./components/Form";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default async function MerchantPage() {
    const user = await currentUser(); 
    const merchant = await getMerchantsByUserId(user?.id as string); 

    if(merchant !== null) {
        redirect(`/merchants/home/${merchant?.id}`)
    }

   
    return(
        <div className="px-5 lg:px-[200px] h-screen">
            <div className="mt-5">
                <h1 className="text-3xl font-bold">Become A Merchant In GrogStore</h1>
            </div>
            <div className="flex items-center justify-center">
            <Form />

            </div>
        </div>
    )
}