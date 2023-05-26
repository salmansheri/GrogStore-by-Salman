import { Merchant } from '@prisma/client';
import React from 'react'; 
import ShopItem from './ShopItem';
import EmptyState from '@/components/EmptyState';

interface ShopProps {
    merchants: Merchant[] | null; 

}

const Shop: React.FC<ShopProps> = ({
    merchants
}) => {

    if(merchants?.length === 0) {
        return <EmptyState title="No Shops!" subTitle='We have No Shops in your Area' />
    }
  return (
    <div className="px-5 lg:px-52">
        <div>
            <h1 className="my-5 text-3xl font-bold">Shops In Your City</h1>
        </div>
        <div className="flex flex-row space-x-7 flex-wrap">
            {merchants?.map((merchant: Record<string, any>) => (
                <ShopItem 
                    key={merchant?.id}
                    merchant={merchant}
                />
            ))}
        </div>
    </div>
  )
}

export default Shop