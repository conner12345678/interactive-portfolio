"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../../components/footer';
import NavBar from "../../components/navBar";
import AboutCard from "../../components/aboutCard"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const [isNav, setIsNav] = useState(false)

    useEffect(()=> {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.card-wrapper',
                pin: true,
                pinSpacing: 100,
                start: "top center",
                end: '+=3000',
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
            .to('.card2', { x: '-100vw', duration: 1, ease: 'power2.inOut' })
            .addLabel('card3Enter')
            .from('.card3', { x: '100vw', duration: 1, ease: 'power2.inOut' }, '<')
            .to('.card3', { x: 0, duration: 1, ease: 'power2.inOut' })
            .addLabel('card3Exit')
            .to('.card3', { x: 0, duration: 1, ease: 'power2.inOut' })
        
        let pinTrigger = ScrollTrigger.create({
        trigger: '.card-wrapper',
        pinSpacing: false,
        pin: '.title-area',
        start: 'center center',
        end: '+=3000',
        scrub: 1
        })

        ScrollTrigger.refresh();

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
            pinTrigger.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, [])
    return(
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

            <div className="m-10">
                <div className="title-area flex flex-col items-center">
                    <h1 className="m-[1vw] text-[4vw]">About Me</h1>
                    <hr className="w-[100vw]"/>
                </div>
            </div>
            <div className="card-wrapper relative flex justify-center w-[80vw]">
                <div className="card absolute top-0">
                    <AboutCard title="Website Design" para="I have learned an exceptional amount about website design and backed from an after school activity provided by West-MEC. This class has provided me with both knowledge and experience for what a job in software development would require and be like. I have certifications and knowledge in python and HTML, as well as knowledge in JavaScript and css. I have experience working on projects in teams using the agile method of development." />
                </div>
                <div className="card2 absolute top-0">
                    <AboutCard title="Education History" para="I started learning how to code in my freshmen year of high school as Mountain Ridge, through an extracurricular activity in a coding class. The class taught me the basics of how to code, and I took another class the year after. That class introduced me to the west-MEC program and I went to take a look. Just like when I chose coding in my high school, the class that stood the most out to me was the the computer science class. West-MEC taught me more about the basics as well as the essentials, and gave me the experience that I need to go into  a job in software development." />
                </div>
                <div className="card3 absolute top-0">
                    <AboutCard title="Hobbies" para="My hobbies consist of codeing, modifying electronics(like a PC) and reading. I do not have very many hobbies, however I am always looking for new things to enjoy while also learning something new." />
                </div>
            </div>

            <Footer />
        </div>
    )
}