import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <h1 className="text-[16px] w-[103px] h-[21px] mt-28 ml-6 sm:ml-12">
        Home / About
      </h1>

      {/* Our Story Section */}
      <div className="flex flex-col lg:flex-row items-center justify-around mt-16 lg:mt-36 ml-6 sm:ml-12">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-[32px] sm:text-[40px] font-bold mb-8">Our Story</h1>
          <p className="w-full sm:w-[525px] lg:w-[525px] h-auto text-[14px] sm:text-[16px]">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <br />
          <p className="w-full sm:w-[505px] lg:w-[505px] h-auto text-[14px] sm:text-[16px]">
            Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center justify-center lg:justify-end mr-12">
          <Image
            src="/public/images/side-img.png"
            alt="side-img"
            width={705}
            height={609}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap items-center justify-evenly mt-16 gap-6">
        {[ 
          { src: "/public/images/ico1.png", title: "10.5k", text: "Sellers active on our site" },
          { src: "/public/images/ico2.png", title: "33k", text: "Monthly Product Sale" },
          { src: "/public/images/ico3.png", title: "45.5k", text: "Customers active on our site" },
          { src: "/public/images/ico4.png", title: "25k", text: "Annual gross sale on our site" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[270px] h-[230px] border border-black rounded flex flex-col items-center justify-center gap-2 hover:bg-[#DB4444] hover:text-[#FAFAFA] hover:border-none"
          >
            <Image src={item.src} alt={`icon-${index}`} width={80} height={80} />
            <h3 className="text-[32px] font-bold">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="flex flex-wrap items-center justify-around mt-16 lg:mt-28 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full sm:w-[370px] h-auto">
            <Image
              src={`/public/images/per${index + 1}.png`}
              width={370}
              height={430}
              alt={`per-${index + 1}`}
              className="w-full h-auto"
            />
            <h1 className="font-bold text-[24px] sm:text-[32px] mt-4 text-center">Tom Cruise</h1>
            <p className="text-center">Founder & Chairman</p>
            <Image
              src="/public/images/social-media.png"
              width={104}
              height={24}
              alt={`social-media-${index + 1}`}
              className="mt-3 mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 gap-10 mt-16 lg:grid-cols-3 lg:gap-20 sm:px-4">
        {[ 
          { src: "/public/images/logo1.png", title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
          { src: "/public/images/logo2.png", title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
          { src: "/public/images/logo3.png", title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" },
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center">
            <Image src={feature.src} width={80} height={80} alt={`logo-${index}`} />
            <h1 className="mt-6 text-[20px] font-semibold lg:text-[24px]">{feature.title}</h1>
            <p className="text-[14px] lg:text-[16px]">{feature.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutPage;
