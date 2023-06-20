import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'; 
import FeaturedItem from './FeaturedItem';

const Features = () => {
    const featuredItems = [
        {
            id: 1,
            image: "/assets/images/home1.png"
        },
        {
            id: 1,
            image: "/assets/images/home2.png"
        },
        {
            id: 1,
            image: "/assets/images/home3.png"
        },
        {
            id: 1,
            image: "/assets/images/home4.png"
        },
    ]
  return (
    <section className="px-5 lg:px-[200px] h-[500px]">
        <div className="flex flex-row space-x-3 items-center text-xs my-10">
            <p className="text-myGreen">Home</p>
            <IoIosArrowRoundForward className="text-myBlack text-opacity-50" />
            <p className="text-myBlack text-opacity-50">Bangalore</p>
        </div>
        <div className="flex flex-col space-y-5">
            <h1 className="text-4xl font-bold">Bangalore</h1>
            <p className=" text-gray-500">Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</p>
        </div>
        <div className="flex flex-row space-x-5 mt-10">

        {featuredItems.map((item) => (
            <FeaturedItem key={item.id} image={item.image} />
            ))}
            </div>


    </section>
  )
}

export default Features