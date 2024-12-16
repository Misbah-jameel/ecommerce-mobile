import React from 'react';
import Image from 'next/image';

const BuyCards = () => {
  return (
    <div className="bg-black w-full min-h-[500px] mx-auto flex flex-col md:flex-row justify-between p-4 md:p-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 md:p-10">
        <p className="text-[#00ff66] pb-5 md:pb-10 font-semibold text-2xl">
          Categories
        </p>
        <h2 className="text-3xl md:text-5xl text-white pb-5 md:pb-10">
          Enhance your Music Experience
        </h2>
        {/* Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-5 md:pb-10">
          {["Hours", "Days", "Minutes", "Seconds"].map((label, index) => (
            <div key={label} className="rounded-full bg-white p-4 text-center">
              <p className="text-sm md:text-md font-bold text-black">
                {["23", "05", "59", "35"][index]}
              </p>
              <p className="text-xs md:text-sm text-black">{label}</p>
            </div>
          ))}
        </div>
        {/* Button */}
        <button className="bg-[#00ff66] w-full md:w-[171px] h-[56px] rounded-md text-white hover:text-black hover:bg-white">
          Buy Now
        </button>
      </div>
      {/* Right Section */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] mt-8 md:mt-0 flex items-center justify-center">
        {/* Background Blur */}
        <div className="absolute rounded-full bg-[#d9d9d9] blur-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gradient-radial from-[#d9d9d9]/70 via-[#d9d9d9]/90 to-[#d9d9d9]/10 w-[80%] h-[80%]"></div>
        {/* Image */}
        <div className="relative w-[70%] h-[70%]">
          <Image
            src="/specker.webp"
            alt="Speaker"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyCards;
