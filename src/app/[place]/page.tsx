import getMerchantsByCity from "@/actions/getMerchantsByCity";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import TopPicks from "@/components/TopPicks";
import Shop from "./Shop";

interface IParams {
    place: string; 
}

export default async function Place({params}: {params: IParams}) {
    const { place } = params; 
    const merchants = await getMerchantsByCity(place); 
    
    
  return (
    <div>
      <Hero />
      <Features />
      <TopPicks />
   <Shop 
        merchants={merchants}
      />
    </div>
  );
}
