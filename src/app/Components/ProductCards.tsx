import React from 'react';
import { FaRegHeart, FaEye, FaStar } from "react-icons/fa";
import Image from 'next/image';

const ProductCards = () => {
  const products = [
    { id: 1, img: "/orggame.webp", name: "HAVIT HV-G92 GAME-PAD", price: 99.99, oldPrice: 149, discount: 40 },
    { id: 2, img: "/mouse.webp", name: "Logitech G102 Mouse", price: 49.99, oldPrice: 79, discount: 30 },
    { id: 3, img: "/headphone.webp", name: "HyperX Cloud II Headset", price: 89.99, oldPrice: 129, discount: 35 },
    { id: 4, img: "/orgkey.webp", name: "Razer BlackWidow Keyboard", price: 129.99, oldPrice: 159, discount: 20 },
    { id: 5, img: "/mousepad2.jpg", name: "Corsair MM350 Mousepad", price: 29.99, oldPrice: 49, discount: 40 },
    { id: 6, img: "/orgmonitor.webp", name: "HP EliteDisplay E233 23-Inch Screen LED-Lit", price: 199.99, oldPrice: 249, discount: 20 }
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md relative flex flex-col">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-[#db4444] text-white p-2 rounded-md z-10 text-sm font-bold">
            -{product.discount}%
          </div>
          {/* Icons */}
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
            <div className="bg-gray-200 p-2 rounded-full shadow-md cursor-pointer">
              <FaRegHeart className="text-gray-700 text-lg" />
            </div>
            <div className="bg-gray-200 p-2 rounded-full shadow-md cursor-pointer">
              <FaEye className="text-gray-700 text-lg" />
            </div>
          </div>
          {/* Product Image */}
          <Image
            src={product.img}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-t-lg object-cover w-full h-[300px]"
          />
          {/* Product Details */}
          <div className="p-4 flex-1 flex flex-col">
            <h2 className="text-lg font-semibold text-black mb-2">{product.name}</h2>
            <div className="text-xl font-bold text-gray-900 mb-2">
              ${product.price.toFixed(2)}
              <span className="font-normal text-gray-500 text-sm line-through ml-2">
                ${product.oldPrice.toFixed(2)}
              </span>
            </div>
            {/* Ratings */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-sm" />
              ))}
            </div>
            {/* Add to Cart Button */}
            <button className="mt-auto bg-black text-white py-2 rounded hover:bg-[#db4444] transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
