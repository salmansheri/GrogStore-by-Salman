import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-52 mt-10 h-screen">
      <div className="relative  w-full h-[80%] bg-black rounded-lg overflow-hidden">
        <Image src="/assets/images/hero.png" alt="hero" fill />
      </div>
    </section>
  );
};

export default Hero;
