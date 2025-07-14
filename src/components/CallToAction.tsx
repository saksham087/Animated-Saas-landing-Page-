"use client";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image"; 
import { motion, useScroll, useTransform } from 'framer-motion'; 
import { useEffect, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"], 
  });
  const translateY = useTransform(scrollYProgress,[0,1], [80, -80])
  
  useEffect(() => {
      scrollYProgress.on('change', (value: number) => console.log('value:', value));
  }, [scrollYProgress])

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden" ref={containerRef}>
      <div className="container max-w-xl mx-auto relative">
        <motion.div
          style={{
            translateY
          }}
        >
          <img src={helixImage.src} alt="" className="absolute top-6 -right-[250px] hidden lg:block" />
        </motion.div>
        <motion.div style={{
          translateY
        }}>
          <img src={emojiStarImage.src} alt="" className="absolute -top-[120px] -left-[300px] hidden lg:block" />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl text-center">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5 text-center">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1" 
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </div>
  );
};
