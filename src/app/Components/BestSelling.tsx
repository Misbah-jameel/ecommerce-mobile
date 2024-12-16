import React from 'react';
import { FaStar, FaRegHeart, FaEye } from "react-icons/fa";
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$99.99",
    oldPrice: "$149",
    image: "/part2pic1.webp",
  },
  {
    id: 2,
    name: "Redragon Keyboard",
    price: "$79.99",
    oldPrice: "$120",
    image: "/paer2pic2.webp",
  },
  {
    id: 3,
    name: "Logitech Mouse",
    price: "$59.99",
    oldPrice: "$90",
    image: "/part2pic3.webp",
  },
  {
    id: 4,
    name: "Lightweight Luminous Wired Gaming Keyboard",
    price: "$59.99",
    oldPrice: "$90",
    image: "/keyboard2.webp",
  },
];

const BestSelling = () => {
  return (
    <div className="max-w-[1170px] mx-auto w-full px-4 md:px-8 lg:px-16">
      <div className="flex gap-x-4 items-center text-[#db4444] font-bold py-4">
        <div className="bg-[#db4444] w-[100px] h-[40px] rounded-md flex items-center justify-center">
          <h2 className="text-white text-lg">This Month</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-white py-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-0">
          Best Selling Product
        </h2>
      </div>
      <div className='flex items-center justify-end '>
        <button className="bg-[#db4444] justify-end text-white w-full md:w-[159px] h-[56px] rounded-md hover:bg-gray-700 ">
          View All
        </button>
        </div>
      {/* Updated grid for 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute bg-[#db4444] p-2 m-2 rounded-md text-white text-sm">
              -40%
            </div>
            {/* Image Section */}
            <div className="p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
            {/* Details Section */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-black">
                {product.name}
              </h2>
              <p className="text-xl font-bold text-black">
                {product.price}{" "}
                <span className="font-normal opacity-50 line-through">{product.oldPrice}</span>
              </p>
              {/* Stars */}
              <div className="flex items-center gap-1 mt-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
              </div>
            </div>
            {/* Action Icons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <div className="bg-white p-2 rounded-full shadow-md cursor-pointer">
                <FaRegHeart className="text-gray-700" />
              </div>
              <div className="bg-white p-2 rounded-full shadow-md cursor-pointer">
                <FaEye className="text-gray-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
