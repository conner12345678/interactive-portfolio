"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../../components/footer';
import NavBar from "../../components/navBar";
import AboutCard from "../../components/aboutCard"

export default function About() {
    const [isNav, setIsNav] = useState(false)


    return(
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
            <div className="card-wrapper">
                <div className="card absolute top-0">
                    <AboutCard title="Website Design" para="I have learned an exceptional amount about website design and backed from an after school activity provided by West-MEC. This class has provided me with both knowledge and experience for what a job in software development would require and be like. I have certifications and knowledge in python and HTML, as well as knowledge in JavaScript and css. I have experience working on projects in teams using the agile method of development." />
                </div>
                <div className="card2 absolute top-0">
                    <AboutCard title="Education History" para="I started learning how to code in my freshmen year of high school as Mountain Ridge, through an extracurricular activity in a coding class. The class taught me the basics of how to code, and I took another class the year after. That class introduced me to the west-MEC program and I went to take a look. Just like when I chose coding in my high school, the class that stood the most out to me was the the computer science class. West-MEC taught me more about the basics as well as the essentials, and gave me the experience that I need to go into  a job in software development." />
                </div>
                <div className="card3 absolute top-0">
                    <AboutCard title="Work on later" para="This is a temp lmao" />
                </div>
            </div>

            <Footer />
        </div>
    )
}