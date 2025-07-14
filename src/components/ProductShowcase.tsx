"use client";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion , useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
   const {scrollYProgress} = useScroll({
     target: appImage,
     offset: ["start end", "end end"],
     
   });
    
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress,[0 , 1] ,  [.5 , 1])
  return <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] ">
    <div className="container">
      <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter "> Intutive interface</h2>
      <div className="max-w-xl mx-auto ">
        <p className="text-xl text-center text-white/70 mt-5 ">Celebrate the joy of accomplished with an app designed to track your progress
        </p>
      </div>
      <div className="flex justify-center mt-14">
        <motion.div 
        ref={appImage}
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: '800px'
          
        }}>
          <img src={appScreen.src} alt="The product screenshot" className="max-w-full h-auto" />
        </motion.div>
      </div>
    </div>
  </div>;
};
