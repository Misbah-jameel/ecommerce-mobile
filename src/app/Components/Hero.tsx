import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    // < className="m-[835px] p-[6595px]">
    <div className='max-w-[1170px] mx-auto px-4 md:px-6 lg:px-8 py-8'>
      <div className='flex flex-col md:flex-row items-start gap-y-6 md:gap-y-0'>
        {/* Left Sidebar */}
        <ul className='border-r-2 space-y-4 w-full md:w-[217px] h-auto md:h-[344px] md:pr-4'>
          <li className='flex justify-between items-center'>
            Womans Fashion 
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
            </svg>
          </li>
          <li className='flex justify-between items-center'>
            Mens Fashion
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
            </svg>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Babys & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>

        {/* Hero Content */}
        <div className='bg-black w-full md:w-[892px] h-auto md:h-[344px] flex flex-col md:flex-row justify-between items-center text-white p-6 md:py-8 md:px-10'>
          <div className='flex flex-col items-start gap-y-4 md:w-1/2'>
            {/* Apple Logo and Description */}
            <div className='flex items-center gap-x-4 justify-end'>
              <Image
                alt="apple"
                src="/apple.webp"
                width={50}
                height={50}
                loading='lazy'
              />
              <p className='text-sm md:text-base'>iPhone 14 Series</p>
            </div>
            <h2 className='text-3xl md:text-5xl font-bold'>
              Up to 10% off voucher
            </h2>
            <p className='underline cursor-pointer'>Shop Now</p>
          </div>

          {/* Product Image */}
          <div className='w-full md:w-auto'>
            <Image
              src="/blue.jpg"
              alt="iphone"
              width={600}
              height={600}
              loading='lazy'
              className='max-w-full h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
