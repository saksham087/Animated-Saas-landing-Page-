"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
 
export const Feature = ({ title , description} : { title:string; description: string}) => {
    const offsetX = useMotionValue(0);
    const offsetY = useMotionValue(0);
    const border = useRef<HTMLDivElement>(null);
    
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const rect = border.current.getBoundingClientRect();
            offsetX.set(e.clientX - rect.left);
            offsetY.set(e.clientY - rect.top);
        };
        
        window.addEventListener('mousemove', updateMousePosition); 
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);    
        };
    }, [offsetX, offsetY]);

    return (
        <div key={title} className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"> 
            <motion.div 
                className="absolute inset-0 border-2 border-purple-400 rounded-xl" 
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage,
                }}
                ref={border}
            />
            <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p> 
        </div>
    );
};
