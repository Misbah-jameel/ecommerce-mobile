import React from 'react';
import Image from 'next/image';

const NewArrival = () => {
  return (
    <div className="bg-black py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1170px] mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
          New Arrival
        </h2>
        <button className="bg-[#db4444] text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-[#c33b3b] transition-all">
          View All Products
        </button>
      </div>

      {/* Featured Section */}
      <div className="max-w-[1170px] mx-auto px-4 md:px-8 lg:px-16 mt-8">
        <div className="bg-[#db4444] w-[120px] h-[40px] flex items-center justify-center rounded-md text-white text-lg font-bold mb-6">
          Featured
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Large Product */}
          <div className="h-[400px] md:h-[500px] bg-black relative">
            <Image
              src="/station.webp"
              alt="PlayStation 5"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-6 space-y-4 bg-gradient-to-t from-black to-transparent text-white rounded-b-lg">
              <h2 className="text-2xl font-bold">PlayStation 5</h2>
              <p>Black and White Version of the PS5 coming Out On Sale.</p>
              <h3 className="text-lg font-semibold cursor-pointer hover:underline">
                Shop Now
              </h3>
            </div>
          </div>

          {/* Side Products */}
          <div className="grid grid-rows-2 gap-6">
            {/* Top Side Product */}
            <div className="h-[250px] bg-black relative overflow-hidden">
              <Image
                src="/hatgirl.webp"
                alt="Women's Collection"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 p-4 space-y-2 bg-gradient-to-t from-black to-transparent text-white">
                <h2 className="text-xl font-bold">Womens Collection</h2>
                <p>Featured womens collections that give you another vibe.</p>
                <h3 className="text-lg font-semibold cursor-pointer hover:underline">
                  Shop Now
                </h3>
              </div>
            </div>

            {/* Bottom Side Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product 1 */}
              <div className="h-[250px] bg-black relative">
                <Image
                  src="/perfume.webp"
                  alt="Timeless Perfume"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 p-4 space-y-2 bg-gradient-to-t from-black to-transparent text-white">
                  <h2 className="text-xl font-bold">Timeless</h2>
                  <p>Timeless Ladies Perfume inspired by Chanel Chance.</p>
                  <h3 className="text-lg font-semibold cursor-pointer hover:underline">
                    Shop Now
                  </h3>
                </div>
              </div>

              {/* Product 2 */}
              <div className="h-[250px] bg-black relative">
                <Image
                  src="/perfume2.webp"
                  alt="Hug of Jasmine Perfume"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 p-4 space-y-2 bg-gradient-to-t from-black to-transparent text-white">
                  <h2 className="text-xl font-bold">Hug of Jasmine</h2>
                  <p>Florece Hug of Jasmine Ladies Perfume.</p>
                  <h3 className="text-lg font-semibold cursor-pointer hover:underline">
                    Shop Now
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
