"use client";
import ArrowIcon from '../assets/icons/arrow-w.svg';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';
import {motion} from 'framer-motion'; 


export const Hero = () => {
  return <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[96px] relative overflow-clip">
    <div className="container">
      <div className="flex items-center justify-center">
        <a href="#" className=" inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
          <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0BD,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
            Version 2.0 is here
          </span>
          <span className="inline-flex items-center gap-1">
            <span>Read More</span>
            <ArrowIcon />
          </span>
        </a>
      </div>
      <div className="flex justify-center mt-8">
        <div className="inline-flex relative ">
          <h1 className="text-7xl sm:text-9xl font-bond tracking-tighter text-center   inline-flex">One Task <br />at a Time
          </h1>
          <motion.div className="absolute right-[476px] top [108px] hidden sm:inline" drag dragSnapToOrigin>
          <img 
          src={cursorImage.src} 
          height="200"
           width="200"
           alt="" 
           className="max-w-none"
           draggable="false" />
           </motion.div>

           <motion.div className="absolute top-[56px] left-[498px] hidden sm:inline" drag dragSnapToOrigin>
          <img 
          src={messageImage.src}  
          height="200"
           width="200"
            alt=""
           className=" max-w-none"
           draggable="false"/>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center"></div>
      <p className="text-center text-xl">Celebrate the joy of accoumplished with an app designed to track progress, motivate your efforts, and celebrate your successes.
      </p>
      <div className="flex justify-center mt-8">
        <button className="bg-white text-black py-3 px-5 rounded-lg">Get for free</button>
      </div>;
    </div>
    <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[(100%-96px)]]">

    </div>
  </div>
};