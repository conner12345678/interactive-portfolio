'use client';

import Image from "next/image";
import Link from "next/link";
import HomeContent from '../components/homeContent';
import Footer from '../components/footer';
import NavBar from "../components/navBar";
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

import { useEffect, useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)



export default function Home() {
  const [isNav, setIsNav] = useState(true)

  const containerRef = useRef(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.card')

    gsap.to(sections, {
      xPercent: -100 * (sections.length -1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length -1),
        end: () => '+=' + containerRef.current.offsetWidth
      },
    });
  }, [])

  return (
    <div className="p-10 flex flex-col items-center">
            <AnimatePresence>
                {isNav && (
                    <NavBar isNav={isNav} setIsNav={setIsNav}/>
                )}
            </AnimatePresence>

            {!isNav && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-4 right-4 cursor-pointer z-50"
                    onClick={() => setIsNav(true)}
                >
                    <div className="w-8 h-1 bg-[#4ade80] mb-2"></div>
                    <div className="w-8 h-1 bg-[#4ade80] mb-2"></div>
                    <div className="w-8 h-1 bg-[#4ade80]"></div>
                </motion.div>
            )}
      <div className="title-area flex flex-col items-center">
        <div className="image relative w-[20vw] h-[20vw]">
          <Image
            src="https://res.cloudinary.com/duehylw5k/image/upload/v1740194724/picture_rtied7.jpg"
            alt="Image of me"
            fill
            className="object-cover rounded-full"/>
        </div>
        <div className="name text-[32px] text-center">
          <h1 className="text-[#F5F5F5]">Hi, I'm <span className="text-[#4ade80]">Conner Ehly</span> — an <span className="text-[#4ade80]">entry level web developer</span> with expertise in <span className="text-[#4ade80]">Python, Javascript, HTML, CSS, SCSS and Typescript</span>. Welcome to my portfolio! I'm excited to show you my work.</h1>
        </div>
        <hr className="my-6 border-t-2 border-[#4ade80] w-full"/>
      </div>
      <div ref={containerRef} className="flex overflow-hidden h-screen">
        <div className="flex w-screen">
          <HomeContent className="card w-screen h-screen flex items-center justify-center" title="My Projects" content={
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

                <a href="https://cehly-movie-quiz.netlify.app" target="_blank">
                  <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src="https://res.cloudinary.com/duehylw5k/image/upload/v1740195766/Screenshot_2025-02-21_204156_pzhrt3.png"
                        alt="Quiz website"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-[f1f5f9] text-xl font-semibold">Quiz website</h2>
                    <p className="text-[#cbd5e1]">This is a small 20 question movie quiz that I worked on</p>
                  </div>
                </a>

                <a href="https://cehly-pokemon-test.netlify.app" target="_blank">
                  <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src="https://res.cloudinary.com/duehylw5k/image/upload/v1746048020/Screenshot_2025-04-30_141020_hzppvq.png"
                        alt="Pokemon Website Picture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-[f1f5f9] text-xl font-semibold">Pokemon website</h2>
                    <p className="text-[#cbd5e1]">This is a pokemon website that uses an api, I worked on</p>
                  </div>
                </a>

                <a href="https://invisible-maze-game.netlify.app" target="_blank">
                  <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src="https://res.cloudinary.com/duehylw5k/image/upload/v1746048000/Screenshot_2025-04-30_141252_t4ie5i.png"
                        alt="Maze Website Picture"
                        fill
                        className="object-cover"
                        />
                    </div>
                    <h2 className="text-[f1f5f9] text-xl font-semibold">Maze Wesite</h2>
                    <p className="text-[#cbd5e1]">This is one of the first websites that I worked on. It is a maze game.</p>
                  </div>
                </a>
                <div className="bg-[#334155] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://res.cloudinary.com/duehylw5k/image/upload/v1734143850/task-manager/cb0aal7zt4uyjwqkv7j7.jpg"
                      alt="test pic"
                      fill
                      className="object-cover"
                      />
                  </div>
                  <h2 className="text-[f1f5f9] text-xl font-semibold">Test Project</h2>
                  <p className="text-[#cbd5e1]">The desc</p>
                </div>

                <div className="col-span-full flex justify-center mt-8">
                  <button className="bg-[#4ade80] rounded-lg py-1 border-3 border-black p-1 hover:bg-[#4ade65]">Learn more</button>
                </div>
              </div>
            </>}/>

            <HomeContent className="card w-screen h-screen flex items-center justify-center" title="Breifly about me" content={
              <>
                  <p className="text-center">I'm a software developer with 2 years of hands-on coding experience provided by west-MEC. I have learned about building responsive web applications and interfaces using technologies like React, Tailwind, and Next.js. I also have experience and certifications in python, HTML and CSS.</p>
                  <div className="col-span-full flex justify-center m-6">
                    <button className="bg-[#4ade80] rounded-lg py-1 border-3 border-black p-1 hover:bg-[#4ade65]">Learn more</button>
                  </div>
              </>}/>
            </div>
          </div>

        <Footer />
    </div>
  );
}
