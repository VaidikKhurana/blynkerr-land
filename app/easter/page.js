"use client"
// pages/index.js
import Head from 'next/head'
import { useState } from 'react'
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
export default function page() {
  return (
   <div className={GeistSans.className}>
      <div className="flex justify-center min-h-screen bg-black items-center font-medium text-white text-center flex-col">
        <h1 className="text-white text-6xl w-[70vw]">Tell more about yourself with a simple <span className="bg-yellow-600">blynkard</span> </h1>
        <div className="w-[30vw] border-gray-700 border-2 h-[25vw] px-[7vw] py-[1.5vw] rounded-3xl mt-[3vw] flex-col justify-center items-center">
          <img src="./pfp.jpg" className="rounded-full w-[9vw]"></img>
          <div className=" justify-center items-center text-left pt-2">
          <h1 className="font-medium text-3xl">Vaidik Khurana</h1>
            <p className="pt-2 pb-1 font-medium">I like to work with computers :)</p>
            <p className="w-[20vw] text-gray-500">I'm a full stack developer and ethical hacker proficient in Python, Tailwind, C++, and basic web dev.</p>
            <h1 className="pt-2 cursor-pointer"><u>Follow on <strong>Blynkerr</strong></u></h1>
          </div>
        </div>
      </div>
   </div>
  );
}
