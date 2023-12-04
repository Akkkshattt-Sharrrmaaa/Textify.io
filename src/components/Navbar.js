import React from 'react';
import 'typeface-inter';
import '../fonts.css';

export const Navbar = () => {
  return (
    <div className='px-[100px] flex justify-between items-center mt-[30px]'>
        
        <div className=" text-[40px] font-bold capitalize font-['Inter'] cursor-pointer">
            <p>Textify.io</p>
        </div>

        <div className=' flex gap-10 font-Outfit text-white text-xl font-normal cursor-pointer'>
            <div>about</div>
            <div>contact</div>
        </div>

    </div>
  )
}


export default  Navbar;