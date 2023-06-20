import { getProductById } from "@/actions/getProductsByCategories";
import ProductPageClient from "./ProductPageClient";
import { currentUser } from "@clerk/nextjs";

interface IParams {
    productId: string; 
}

export default async function ProductPage({params}: {params: IParams}) {
    const user = await currentUser();
    const { productId } = params;
    const product = await getProductById(productId); 


    return(
        <div className="px-10 lg:px-[200px]">
            <ProductPageClient 
                product={product}
               
            />
        </div>
    )
}