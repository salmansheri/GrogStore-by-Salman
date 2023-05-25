import Image from 'next/image';
import React from 'react'

interface TopPicksItemsListProps {
    id: number; 
    image: string; 
}

const TopPicksItemsList: React.FC<TopPicksItemsListProps> = ({
    id,
    image
}) => {
  return (
    <div className="rounded-lg overflow-hidden">
        <Image
            src={image}
            alt={image}
            height={300}
            width={300}
        />
    </div>
  )
}

export default TopPicksItemsList