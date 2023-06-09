'use client'; 

import Image from "next/image";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from 'next/navigation'; 

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";


interface NavbarProps {
  user: any;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const router = useRouter(); 
  
  return (
    <nav className="h-[72px] border items-center flex px-10 lg:px-52 bg-white">
      <div className="container flex items-center justify-between">
        {/* Left         */}
        <div className="flex flex-row flex-2 space-x-10">
          <Link href="/">
            <Image
              src="/assets/png/logo-no-background.png"
              alt="logo"
              width={200}
              height={200}
            />
          </Link>
          <div className="flex flex-row items-center space-x-1">
            <IoLocationSharp color="green" />
            <select className="z-50">
             
                <option >
           
                
                </option>
            
             
                <option>

                Krishagiri
                </option>
             
           
                <option>

                Krishagiri
                </option>
               
            </select>
          </div>
        </div>
        {/* center  */}
        <div className="flex-1  flex flex-row space-x-10">
         
          <span className="text-lg font-semibold flex flex-row items-center space-x-1.5 cursor-pointer">
            <Link href="/merchants">Merchant</Link>
           
          </span>
        </div>
        {/* right  */}
        <div className="flex-1  flex flex-row text-sm space-x-5">
         
          <div className="flex flex-col items-center cursor-pointer hover:text-green-500" onClick={() => router.push("/cart")}>
            <AiOutlineShoppingCart className="hover:text-green-500" size={20} />
            <span>Cart</span>
          </div>

          {user ? (
            <div className="flex flex-col items-center cursor-pointer hover:text-green-500">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex flex-col items-center cursor-pointer">
              <button className="bg-green-500 text-white text-sm font-semibold px-4 rounded-full py-2">
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
