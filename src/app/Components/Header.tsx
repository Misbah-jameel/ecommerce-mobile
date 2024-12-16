import React from 'react'

const Header = () => {
  return (
    <div className="w-46px h-46px t-[5430px] l-[1305px] ">
      <div className='border-b-2'>
        <div className='text-[#fafafa] bg-black flex items-center justify-evenly p-2 text-sm md:text-base'>
            <h1 className='flex gap-x-4'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <button className='font-bold'>ShopNow</button>
            </h1>
            <select className='bg-black border-none justify-end'>
                <option value="English">ENGLISH</option>
                <option value="Urdu">URDU</option>
                <option value="Arabic">ARABIC</option>
                <option value="Turkish">TURKISH</option>
                <option value="Chinese">CHINESE</option>
            </select>
        </div>
      </div>
    </div>
  )
}

export default Header
