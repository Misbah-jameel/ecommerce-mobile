import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TfiShield } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
      {/* Delivery Icon Section */}
      <div className="text-center flex flex-col items-center">
        <div className="w-[80px] h-[80px] bg-[rgba(47,46,48,0.3)] flex items-center justify-center rounded-full">
          <div className="bg-black rounded-full p-2 flex items-center justify-center w-[58px]">
            <TbTruckDelivery className="text-white" size={35} />
          </div>
        </div>
        <h3 className="font-bold mt-4">FREE AND FAST DELIVERY</h3>
        <p className="text-sm">Free delivery for all orders over $140</p>
      </div>

      {/* Customer Service Icon Section */}
      <div className="text-center flex flex-col items-center">
        <div className="w-[80px] h-[80px] bg-[rgba(47,46,48,0.3)] flex items-center justify-center rounded-full">
          <div className="bg-black rounded-full p-2 flex items-center justify-center w-[58px]">
            <RiCustomerService2Fill className="text-white" size={35} />
          </div>
        </div>
        <h3 className="font-bold mt-4">24/7 CUSTOMER SERVICE</h3>
        <p className="text-sm">Friendly 24/7 customer support</p>
      </div>

      {/* Money Back Guarantee Icon Section */}
      <div className="text-center flex flex-col items-center">
        <div className="w-[80px] h-[80px] bg-[rgba(47,46,48,0.3)] flex items-center justify-center rounded-full">
          <div className="bg-black rounded-full p-2 flex items-center justify-center w-[58px]">
            <TfiShield className="text-white" size={35} />
          </div>
        </div>
        <h3 className="font-bold mt-4">MONEY BACK GUARANTEE</h3>
        <p className="text-sm">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Footer;
