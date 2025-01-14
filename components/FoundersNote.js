import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import AnimatedGradientText from "@/components/AnimatedGradientText";
import GradientSpotlight from './GradientSpotlight';

const FoundersNote = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div>
    <GradientSpotlight 
  startColor="rgba(220, 38, 38, 0.8)"  // Red color
  midColor="rgba(248, 113, 113, 0.1)"
/>
    <section id="foundersnote" className="animated-gradient flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-black text-white min-h-screen">
      
      <div className="flex items-center w-[80%]" ref={sectionRef}>
        <motion.div 
          className="pl-[12vw] flex flex-col items-start w-[40%]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <motion.img 
            src="./pfp.jpg" 
            className="w-[10vw] rounded-full mb-4" 
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <h1 className="font-medium text-3xl">Vaidik Khurana</h1>
            <p className="pt-2 pb-1 font-medium">I like to work with computers :)</p>
            <p className="w-[20vw] text-gray-500">I'm a full stack developer and ethical hacker proficient in Python, Tailwind, C++, and basic web dev.</p>
            <h1 className="pt-2 cursor-pointer"><u>Follow on <strong>Blynkerr</strong></u></h1>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-[60%] pl-2 pr-40"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <h1 className="font-medium text-4xl">Founder's Note</h1>
          <p className="mt-4 text-xl text-gray-400 justify-center items-center">
            Hi! I'm Vaidik 👋 You can know about me by seeing my blynkard
            on the left, I am the person responsible behind the creation 
            of blynkerr. However, I was inspired by many individuals most 
            special of them all include <a href="https://www.nitlix.pro" className="underline cursor-pointer">@nitlix</a> and @facedev. Blynkerr for me 
            is not just a project it's a part of my life that I'll never forget
            , this is blynkerr v1.0
            <motion.h1 
              className="text-2xl font-medium text-white pt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              <strong>@vaidikkhurana out.</strong>
            </motion.h1>
          </p>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default FoundersNote;