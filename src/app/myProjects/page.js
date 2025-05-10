"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavBar from '../../components/navBar'
import Footer from '../../components/footer'

import Image from "next/image"


export default function MyProjects() {
    const [isNav, setIsNav] = useState(false)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo('.pro-1-wrapper',
            { x: '100vw' },
            {
            x: 0,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.pro-1-wrapper',
                start: 'top center',
                toggleActions: 'play none none none'
            }
            }
        );

        gsap.fromTo('.pro-2-wrapper',
            { x: '-100vw' },
            {
            x: 0,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.pro-2-wrapper',
                start: 'top center',
                toggleActions: 'play none none none'
            }
            }
        );

        gsap.fromTo('.pro-3-wrapper',
            {x: '100vw' },
            {
                x: 0,
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.pro-3-wrapper',
                    start: 'top center',
                    toggleActions: 'play none none none'
                }
            }
        )

        ScrollTrigger.refresh()
    }, [])
    return(
        <div>
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

            <div className="overflow-hidden">
                <div className="pro-1-wrapper flex flex-row justify-center">
                    <div className="bg-[#1E293B] w-[30vw] h-[30vw] m-10 text-center text-[#F5F5F5] p-2">
                        <h1 className="text-[3vw] my-2">Quiz Website</h1>
                        <hr className="my-4"/>
                        <p className="my-4">This is a small 20 question movie quiz that I worked on. This quiz consists of a wide veriety of questions that range from quotes in movies to actors that played in movies. This website is run on netlify, and uses react to make the process of backend and animation more readable.</p>
                        <a href="https://cehly-movie-quiz.netlify.app" target="_blank">
                            <button className="bg-[#4ade80] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#4ade10] transition">
                                Go To Website
                            </button>
                        </a>
                    </div>
                    <div className="bg-blue-200 w-[30vw] h-[30vw] m-10 relative"><Image src="https://res.cloudinary.com/duehylw5k/image/upload/v1740195766/Screenshot_2025-02-21_204156_pzhrt3.png" alt="Quiz Website Image" fill className="object-cover"/></div>
                </div>

                <div className='pro-2-wrapper flex flex-row justify-center'>
                    <div className="bg-blue-200 w-[30vw] h-[30vw] m-10 relative"><Image src="https://res.cloudinary.com/duehylw5k/image/upload/v1746841300/Screenshot_2025-05-09_184103_wdcsul.png" alt="Pokemon Website Image" fill className="object-cover"/></div>
                    <div className="bg-[#1E293B] w-[30vw] h-[30vw] m-10 text-center text-[#F5F5F5] p-2">
                        <h1 className="text-[3vw] my-2">Pokedex Website</h1>
                        <hr className="my-4"/>
                        <p className="my-4">This is a pokemon website that uses an api, I worked on. This website uses the pokeapi to gather a full list of every current pokemon, and display their information when a specific one is clicked on.</p>
                        <a href="https://cehly-pokemon-test.netlify.app" target="_blank">
                            <button className="bg-[#4ade80] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#4ade10] transition">
                                Go To Website
                            </button>
                        </a>
                    </div>
                </div>

                <div className="pro-3-wrapper flex flex-row justify-center">
                    <div className="bg-[#1E293B] w-[30vw] h-[30vw] m-10 text-center text-[#F5F5F5] p-2">
                        <h1 className="text-[3vw] my-2">Invisible Maze Website</h1>
                        <hr className="my-4"/>
                        <p className="my-4">This is one of the first websites that I worked on, It is a maze game. This website uses jquery to control the player around an invisible maze. The player has a beam at their disposal that they can use to make parts of the wall visible.</p>
                        <a href="https://invisible-maze-game.netlify.app" target="_blank">
                            <button className="bg-[#4ade80] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#4ade10] transition">
                                Go To Website
                            </button>
                        </a>
                    </div>
                    <div className="bg-[#1E293B] w-[30vw] h-[30vw] m-10 relative"><Image src="https://res.cloudinary.com/duehylw5k/image/upload/v1746048000/Screenshot_2025-04-30_141252_t4ie5i.png" alt="Invisible Maze Website Image" fill className="object-cover"/></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}