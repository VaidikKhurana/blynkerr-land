"use client"

import Head from 'next/head'
import { useState } from 'react'
import Image from "next/image"
import { GeistSans } from "geist/font/sans"

export default function Page() {
  return (
    <div className={GeistSans.className}>
      <div className="flex justify-center min-h-screen bg-black items-center font-medium text-white text-center flex-col px-4">
        {/* Heading with responsive text size */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
          Tell more about yourself with a simple 
          <span className="bg-yellow-600 ml-2">blynkard</span>
        </h1>

        {/* Profile Card with responsive width and padding */}
        <div className="w-[90%] md:w-[60%] lg:w-[30%] border-gray-700 border-2 rounded-3xl mt-8 md:mt-12 p-6 md:p-8">
          {/* Profile Image with responsive size */}
          <div className="flex justify-center">
            <img 
              src="./pfp.jpg" 
              className="rounded-full w-24 md:w-32 lg:w-36 aspect-square object-cover"
              alt="Profile Picture"
            />
          </div>

          {/* Profile Content */}
          <div className="text-left pt-4 md:pt-6">
            <h2 className="font-medium text-2xl md:text-3xl">Vaidik Khurana</h2>
            <p className="pt-2 pb-1 font-medium text-sm md:text-base">
              I like to work with computers :)
            </p>
            <p className="text-gray-500 text-sm md:text-base max-w-full md:max-w-[90%]">
              I'm a full stack developer and ethical hacker proficient in Python, Tailwind, C++, and basic web dev.
            </p>
            <h3 className="pt-4 cursor-pointer text-sm md:text-base">
              <u>Follow on <strong>Blynkerr</strong></u>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}