'use client'; 

import EmptyState from '@/components/EmptyState';
import { Product } from '@prisma/client';
import React, { useMemo, useState } from 'react'; 
import ProductsItem from './ProductsItem';


interface ProductsPageClientProps {
  products: Product[] | null | undefined,

}

const ProductsPageClient: React.FC<ProductsPageClientProps> = ({
  products,

}) => {
  const [category, setCategory] = useState("groceries");
  const filteredProducts = useMemo(() => {
    return products?.filter(product => product.category?.toLowerCase() === category.toLowerCase())

  }, [products, category]); 


  

  
  return (
    <div className="my-5">
      <div>
        <select defaultValue="groceries" onChange={(e) => setCategory(e.target.value)}>
          <option value="groceries">Groceries</option>
          <option value="meat">Meat</option>
        </select>
       
      </div>
      {filteredProducts?.length === 0 ? (
        <EmptyState 
          title="No Products Found!"
          subTitle='We have No product in this Category'
        />

      ): (

      <div className="flex flex-row flex-wrap gap-10 my-10">
        {filteredProducts?.map((product: Product | null) => (
          <ProductsItem
            key={product?.id} 
            product={product}
          />
        ))}
      </div>
      )}

    
    </div>
  )
}

export default ProductsPageClient