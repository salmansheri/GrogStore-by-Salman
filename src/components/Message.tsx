import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'; 

const Message = () => {
  return (
    <div className="h-auto  bg-gradient-to-r from-blue-950 to-blue-800 flex items-center px-5   lg:px-52">
        <div className='container text-white flex flex-row items-center  justify-between'>
            <div className="flex flex-row space-x-5 items-center">

            <div className="bg-gray-500 h-8 w-8 rounded-full flex items-center pb-3 relative">

            <Image 
                src="/assets/images/paan.png"
                alt="paan"
                width={500}
                height={500}
                className=" absolute"
                />
                </div>

                <p>Order Paan items, munchies and much more on our new GrocStore app </p>
                </div>
                <div className="flex flex-row space-x-2 text-myGreen items-center cursor-pointer">
                    Download GrogStore app
                    <IoIosArrowForward />


                </div>


        </div>
    </div>
  )
}

export default Message