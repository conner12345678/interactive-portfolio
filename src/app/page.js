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
  const [isNav, setIsNav] = useState(false)

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card-wrapper',
        pin: true,
        pinSpacing: 100,
        start: 'center center',
        end: "+=3000",
        scrub: 1,
        snap: {
          snapTo: 'labelsDirectional',
          duration: 1,
          delay: 0.1,
          ease: 'power1.inOut'
        }
      }
    })

    tl.addLabel('card1Enter')
      .from('.card', { x: 0, duration: 1, ease: 'power2.inOut' })
      .addLabel('card1Exit')
      .to('.card', { x: '-100vw', duration: 1, ease: 'power2.inOut' })
      .addLabel('card2Enter')
      .from('.card2', { x: '100vw', duration: 1, ease: 'power2.inOut' }, '<')
      .to('.card2', { x: 0, duration: 1, ease: 'power2.inOut' })
      .addLabel('card2Exit')
      .to('.card2', { x: '100vw', duration: 1, ease: 'power2.inOut' })
      .addLabel('card3Enter')
      .from('.card3', { x: '-100vw', duration: 1, ease: 'power2.inOut' }, '<')
      .to('.card3', { x: 0, duration: 1, ease: 'power2.inOut' })

    let pinTrigger = ScrollTrigger.create({
      trigger: '.card-wrapper',
      pin: '.title-area',
      start: 'center center',
      end: '+=3000',
      scrub: 1
    })

    return () => {
      // 💥 Clean up timeline and ScrollTriggers
      tl.scrollTrigger?.kill();
      tl.kill();
      pinTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // optional: kill all triggers
    };
  }, [])

  return (
    <div className="p-10 flex flex-col items-center">
      <div>
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
      </div>
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
      
      <div className="card-wrapper relative overflow-hidden flex justify-center">
        <div className="card">
          <HomeContent title="My Projects" content={
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

                  <a href="#" target="_blank">
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
                  </a>
              </div>
            </>
          }/>
        </div>

        <div className="card2 absolute top-0">
          <HomeContent title="Breifly About Me" content={
            <div className="text-center">
              <p>I am an entree level software engineer with knowladge and certifications in, Javascript, HTML and CSS, and Python. I am constantly looking for new lessons on software development, and am looking for a job to further my knowladge.</p>
            </div>
          }/>
        </div>

        <div className="card3 absolute top-0">
          <HomeContent title="Contact" content={
            <>

            </>
          }/>
        </div>
      </div>

        <Footer />
    </div>
  );
}
