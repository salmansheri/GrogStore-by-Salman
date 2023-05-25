import Image from 'next/image'
import Link from 'next/link'
import React from 'react'; 
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs'; 

const Footer = () => {
  return (
    <>
    <div className="wave"></div>
    <section className="h-screen bg-myBlack px-[200px] text-white">
        <div className="py-10 border-b border-neutral-500">
            <h4 className="text-lg font-bold py-3">You can’t stop time, but you can save it!</h4>
            <p className='leading-8'>Living in the city, there is never enough time to shop for groceries, pick-up supplies, grab food and wade through traffic on the way back home. How about we take care of all of the above for you? What if we can give you all that time back? Send packages across the city and get everything from food, groceries, medicines and pet supplies delivered right to your doorstep. From any store to your door, just make a list and we’ll make it disappear.</p>

        </div>
        <div className="flex flex-row py-10">
            <div className="flex-1">
                <Image 
                    src="/assets/png/logo-no-background.png"
                    alt="logo"
                    width={100}
                    height={100}
                />

            </div>
            <div className="flex flex-col flex-1 space-y-3">
                <h4 className="font-semibold">GrogStore</h4>
                <Link  className="text-sm"href="/about">About</Link>
                <Link  className="text-sm"href="/about">About</Link>
                <Link  className="text-sm"href="/about">About</Link>
                <Link  className="text-sm"href="/about">About</Link>
                <Link  className="text-sm"href="/about">About</Link>
                <Link  className="text-sm"href="/about">About</Link>
                <Link  className="text-sm"href="/about">About</Link>
            </div>
            <div className="flex flex-col  flex-1 space-y-3">
                <h4 className="text-base font-semibold">Serviceable Cities</h4>
                <Link  className="text-sm"href="/bangalore">Bangalore</Link>
                <Link  className="text-sm"href="/bangalore">Bangalore</Link>
                <Link  className="text-sm"href="/bangalore">Bangalore</Link>
                <Link  className="text-sm"href="/bangalore">Bangalore</Link>
                <Link  className="text-sm"href="/bangalore">Bangalore</Link>
                <Link  className="text-sm"href="/bangalore">Bangalore</Link>
                <Link className="text-sm" href="/bangalore">Bangalore</Link>
            </div>
            <div className='flex-1 flex flex-col  items-center space-y-5'>
                <h4 className="text-base font-semibold">Get In Touch</h4>
                <BsFacebook size={30}  />
                <BsLinkedin size={30}  />
                <BsTwitter  size={30} />
                
            </div>
            <div className='flex-2'>
                <Image 
                    src="/assets/images/footer-mascot.png"
                    alt="footer"
                    width={800}
                    height={800}
                />
            </div>
        </div>

    </section>
    </>
  )
}

export default Footer