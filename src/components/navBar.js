import Link from "next/link"
import { MdCancel } from "react-icons/md";
import { motion } from 'framer-motion'

export default function NavBar({ isNav, setIsNav }){
    return(
        <div>
            <div className="fixed inset-0 w-[100vw] h-[100vh] bg-black z-40 transition-opacity opacity-60 visible"></div>
            <motion.div
                initial={{ x: 200, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                exit={{ x: 200, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 flex flex-col bg-[#1E293B] h-screen w-[18%] z-50 p-3 pt-16 gap-4"
            >
                    <MdCancel className="text-[#4ade80] absolute top-4 right-4 cursor-pointer" size={40} onClick={() => setIsNav(false)}/>
                    <Link className="text-white hover:text-[#4ade80] text-[2vw] m-4 px-4" href="/">Home</Link>
                    <Link className="text-white hover:text-[#4ade80] text-[2vw] m-4 px-4" href="/about">About Me</Link>
                    <Link className="text-white hover:text-[#4ade80] text-[2vw] m-4 px-4" href="/myprojects">Projects</Link>
                    <Link className="text-white hover:text-[#4ade80] text-[2vw] m-4 px-4" href="/contact">Contact</Link>
            </motion.div>
        </div>
    )
}