import { getMerchantsById } from "@/actions/getMerchants";
import { IoLocationOutline } from "react-icons/io5";
import Form from "./components/Form";

interface IParams {
  merchantsId: string;
}

export default async function MerchantHomePage({
  params,
}: {
  params: IParams;
}) {
  const merchant = await getMerchantsById(params.merchantsId as string);
  
  return (
    <div className="px-5 lg:px-[200px] my-10">
      <div className="mt-5">
        <h1 className="text-5xl font-bold italic text-gray-500">Welcome, {merchant?.name}!</h1>
      </div>
      <div className="my-5">
       <h2 className="text-3xl font-semibold text-gray-500">Owner of {merchant?.shopName}</h2>
        <div className="flex flex-row  items-center space-x-1 my-5 text-lightGreen">

        <IoLocationOutline />
        <p>{merchant?.shopAddress}</p>
        </div>
      </div>

      <div>
        <Form merchantId={merchant?.id} 
        ownerName={merchant?.name}
        />
      </div>
    </div>
  );
}
