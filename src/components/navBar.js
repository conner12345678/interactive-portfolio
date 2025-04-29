import Link from "next/link"
import { MdCancel } from "react-icons/md";
import { motion } from 'framer-motion'

export default function NavBar({ isNav, setIsNav }){
    return(
        <motion.div
            initial={{ x: 200, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            exit={{ x: 200, opacity: 0 }}
            className="fixed top-4 right-4 flex flex-col bg-[#1E293B] h-screen w-1/7 z-50"
        >
            <div className="fixed top-4 right-4 flex flex-col bg-[#1E293B] h-screen w-1/7 z-50">
                <MdCancel className="text-[#4ade80] absolute top-4 right-4 cursor-pointer" size={40} onClick={() => setIsNav(false)}/>
                <Link className="flex-1 flex items-center px-6 hover:text-[#4ade80]" href="/">Home</Link>
                <Link className="flex-1 flex items-center px-6 hover:text-[#4ade80]" href="/about">About Me</Link>
                <Link className="flex-1 flex items-center px-6 hover:text-[#4ade80]" href="#">Projects</Link>
                <Link className="flex-1 flex items-center px-6 hover:text-[#4ade80]" href="#">Contact</Link>
            </div>
        </motion.div>
    )
}