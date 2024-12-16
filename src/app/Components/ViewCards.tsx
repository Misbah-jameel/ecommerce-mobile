import React from 'react'
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const ViewCards = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4">
      {/* View All Products Button */}
      <button className="bg-[#db4444] text-[#fafafa] w-[234px] h-[56px] rounded-md hover:bg-gray-700 mb-8">
        View All Products
      </button>

      <div className="container max-w-[1170px] mx-auto">
        <div className="flex flex-col items-center text-[#db4444] font-bold py-4">
          {/* Categories inside Button */}
          {/* <button className=" bg-[#db4444] text-[#fafafa] w-[234px] h-[56px] rounded-md flex items-center justify-center gap-x-2 mb-8">
            <div className="bg-[#fafafa] w-[20px] h-[20px] rounded-full flex items-center justify-center">
              <h2 className="text-[#db4444] text-xs"></h2>
            </div>
            <span className="text-[#fafafa]">Categories</span>
          </button> */}

          {/* Browse By Category Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white">Browse By Category</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Individual Categories */}
          <div className="border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300">
            <div className="flex items-center justify-center">
              <CiMobile3 className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
            <p className="text-center mt-2">Cell phone</p>
          </div>

          <div className="border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300">
            <div className="flex items-center justify-center">
              <RiComputerLine className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
            <p className="text-center mt-2">Computer</p>
          </div>

          <div className="border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300">
            <div className="flex items-center justify-center">
              <BsSmartwatch className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
            <p className="text-center mt-2">Smartwatch</p>
          </div>

          <div className="border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300">
            <div className="flex items-center justify-center">
              <FaCameraRetro className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
            <p className="text-center mt-2">Camera</p>
          </div>

          <div className="border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300">
            <div className="flex items-center justify-center">
              <FaHeadphonesAlt className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
            <p className="text-center mt-2">Headphones</p>
          </div>

          <div className="border-2 p-2 hover:shadow-lg hover:bg-[#db4444] hover:text-white transition duration-300">
            <div className="flex items-center justify-center">
              <IoGameController className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
            </div>
            <p className="text-center mt-2">Game Controller</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCards;
