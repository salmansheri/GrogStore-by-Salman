'use client'; 

import React from 'react'; 

interface EmptyStateProps {
    title:string; 
    subTitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    subTitle,
}) => {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold">{title}</h1>
            <h2 className="text-3xl font-semibold text-myGreen">{subTitle}</h2>
        </div>
    </div>
  )
}

export default EmptyState