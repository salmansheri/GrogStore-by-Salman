import { getMerchantsById } from "@/actions/getMerchants";
import ProductsPageClient from "./ProductsPageClient";


interface ProductPageProps {
    merchantId: string; 
}

export default async function ProductsPage({params}: {params: ProductPageProps}) {
    const { merchantId } = params;
    const merchant = await getMerchantsById(merchantId); 


  return <div className="px-5 lg:px-52">
    <ProductsPageClient 
        products={merchant?.products}
    />
    
  
  </div>;
}
