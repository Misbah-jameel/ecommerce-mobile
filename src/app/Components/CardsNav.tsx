import React from 'react';

const CardsNav = () => {
  return (
    <div className='flex max-w-[1170px] mx-auto justify-center'>
      <div className='flex gap-x-8 items-center font-bold py-4'> {/* Increased gap */}
        <div className='bg-[#db4444] w-[80px] h-[40px] rounded-md flex items-center justify-center'> {/* Adjusted width */}
          <h2 className='text-white text-lg'>Today</h2>
        </div>
        <div className='block md:flex items-center justify-between'>
          <div className='block md:flex items-center gap-x-4 font-bold'>
            <h2 className='text-4xl font-bold flex items-center justify-start pr-10'>
              Flash Sales
            </h2>
            <div className='flex gap-x-4'>
              <div>
                <p className='text-sm'>Days</p>
                <h3 className='text-4xl'>03</h3>
              </div>
              <p className='text-[#db4444] text-2xl'></p>
              <div>
                <p className='text-sm'>Hours</p>
                <h3 className='text-4xl'>23</h3>
              </div>
              <p className='text-[#db4444] text-2xl'></p>
              <div>
                <p className='text-sm'>Minutes</p>
                <h3 className='text-4xl'>19</h3>
              </div>
              <p className='text-[#db4444] text-2xl'></p>
              <div>
                <p className='text-sm'>Seconds</p>
                <h3 className='text-4xl'>56</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsNav;
