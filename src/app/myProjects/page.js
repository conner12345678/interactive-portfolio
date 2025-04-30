"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import NavBar from '../../components/navBar'
import Footer from '../../components/footer'

export default function MyProjects() {
    const [isNav, setIsNav] = useState(true)
    return(
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

            <Footer />
        </div>
    )
}