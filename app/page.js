"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import GradientSpotlight from "@/components/GradientSpotlight";
import Navbar from "@/components/Navbar";
import { TypeAnimation } from "react-type-animation";
import Lenis from "@studio-freight/lenis";
import AnimatedGradientText from "@/components/AnimatedGradientText";
import RainEffect from "@/components/RainEffect";
import ServicesSection from "@/components/ServicesSection";
import GlobeAnimation from "@/components/GlobeAnimation";
import FoundersNote from "@/components/FoundersNote";

const dM_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 0.3,
        easing: (t) => t,
        smoothWheel: true,
        smoothTouch: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className={`${GeistSans.className} flex items-center justify-center min-h-screen bg-black cursor-[url('./cursor.png'), pointer] text-white`}>
        <div className="text-center">
          <h1 className="text-4xl mb-4 font-bold">blynkerr</h1>
          <div className="relative w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute h-full bg-white"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 25,
        damping: 8,
        duration: 1.5,
        delay: 0.2,
      }}
    >
      <div className={`${GeistSans.className} scroll-smooth`}>
        <Navbar />
        <style jsx global>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient {
            background-size: 200% 200%;
            animation: gradient 7s ease infinite;
          }
        `}</style>

        {/* Landing Section */}
        <section id="landing" className="animated-gradient bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white min-h-screen relative">
          <GradientSpotlight />
          <RainEffect />
          <div className="pt-[10vw] px-4 md:px-0 flex font-medium mb-20 flex-col w-full md:w-[80vw] lg:w-[60vw] mx-auto md:ml-[10vw] lg:ml-[20vw] text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl pb-6">
              Creating world-class connections that really help people inspire
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-400">
              We at blynkerr believe in creating world-class connections that
              really help people inspire, but we don't just believe; we help
              others achieve this - @vaidikkhurana (founder).
            </p>
            <img
              src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp"
              className="pt-5 w-full"
              alt="Illustration"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-black text-white flex flex-col lg:flex-row px-4 md:px-8 lg:px-0">
          <div className="lg:ml-20 w-full lg:w-1/2">
            <div className="mt-16 text-xl text-center items-center justify-center py-2 text-black font-medium rounded-xl bg-white w-full md:w-[15vw] h-10">
              <h1>What, How, Why?</h1>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl pt-12 text-left font-medium mb-8">
              Connections, to connect people globally and fast in a blynk.
            </h1>
            <p className="text-[#71717a] text-lg md:text-xl lg:text-2xl">
              As the founder of blynkerr, I can easily say that your connections
              are in good hands. We priortise speed and quality along with responsiveness
              for various platforms. I can assure you that <strong>blynkerr is one of the
              best social medias for you.</strong>
            </p>
            <div className="flex-col gap-2 pt-4 text-xl md:text-2xl">
              <h1><strong>2M+</strong> Users</h1>
              <h1>Incredible Investors</h1>
              <h1>Extremely good platform.</h1>
            </div>
          </div>
          <img src="./globe.png" className="w-full lg:w-auto lg:h-[40vw] mt-8 lg:mt-0" alt="Globe" />
        </section>

        <ServicesSection />
        <FoundersNote />

        {/* Footer Section */}
        <section className="min-h-[20vw] flex flex-col md:flex-row border-t-2 border-gray-600 items-center justify-center gap-8 md:gap-12 p-8 text-gray-300 bg-black">
          <div className="border-gray-600 text-center md:text-left">
            <h1 className="font-medium text-2xl">blynkerr</h1>
            <a href="#landing"><h1 className="font-light underline">Landing page.</h1></a>
            <a href="#about"><h1 className="font-light underline">About.</h1></a>
            <a href="#services"><h1 className="font-light underline">Why Us?.</h1></a>
            <a href="#foundersnote"><h1 className="font-light underline">Founders Note.</h1></a>
            <h1 className="pt-2">dev by @vaidikkhurana</h1>
          </div>
          <div className="text-center md:text-left">
            <h1>@vaidikkhurana</h1>
            <p>Developed in Next.JS</p>
            <p>Built on VS Code. Windows.</p>
            <AnimatedGradientText text="No Dev Issues." />
            <AnimatedGradientText text={`Pilot Version 1.0(Standard)`} />
            <h1 className="text-gray-500 underline">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <TypeAnimation
                  sequence={[
                    "Hmm, you found",
                    1000,
                    "Hmm, you found Waldo...",
                    1000,
                    "Hmm, you found Rick...",
                    1000,
                    "Hmm, you found An Egg...",
                    1000,
                    "Hmm, you found (uhhh)Me?",
                    1000,
                  ]}
                  speed={25}
                  wrapper="span"
                  repeat={Infinity}
                />
              </a>
            </h1>
          </div>
          <div className="text-center md:text-left">
            <h1>v1.0 Pilot</h1>
            <p>Blynkerr</p>
            <p>All rights reserved.</p>
            <AnimatedGradientText text="All systems operational and working." />
            <AnimatedGradientText text={`Delhi India`} />
            <AnimatedGradientText text="Published on 13th January 2025" />
            <AnimatedGradientText text="Last edited on 13th January 2025" />
          </div>
        </section>
      </div>
    </motion.div>
  );
}