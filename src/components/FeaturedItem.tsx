import Image from 'next/image';
import React from 'react'; 

interface FeaturedItemProps {
    image: string; 
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
    image
}) => {
  return (
    <div className="rounded-lg overflow-hidden">
        <Image 
            src={image}
            alt="featured"
            width={300}
            height={300}
        />
    </div>
  )
}

export default FeaturedItem