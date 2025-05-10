"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import NavBar from "../../components/navBar"
import Footer from "../../components/footer"

export default function Contact() {
    const [isNav, setIsNav] = useState(false)
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

            <div className="bg-[#1E293B] w-[30vw] h-[30vw] m-10 text-center p-4">
                <h1 className="text-[3vw]">Contact</h1>
                <hr className="my-4" />
                <h2 className="text-[2vw]">Email: </h2>
                <p className="text-blue-400 my-4"><a href="mailto:connerehly@yahoo.com">connerehly@yahoo.com</a></p>
                <p>I do not currently have any other conventional ways to contact me.</p>
            </div>

            <Footer />
        </div>
    )
}