import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import { motion } from "motion/react";

export default function Home() {
    const anim = {
        initial: { y: 50, opacity: 0 },
        inView: { y: 0, opacity: 1 },
    }
    const transition = {
        duration: 0.75,
        delay: 0.1,
        ease: "easeOut",
    }

    return (
        <MainLayout>
            <div className="relative overflow-hidden h-[37.5rem]">
                <motion.img 
                    src="plus.svg" 
                    className="absolute -left-32 top-36 w-[40%] rotate-[39deg]" 
                    variants={{
                        initial: { y: 50, x: 50, opacity: 0 }, 
                        inView: { y: 0, x: 0, opacity:1 }
                    }}
                    initial="initial" 
                    whileInView="inView" 
                    transition={transition} 
                />

                <motion.img 
                    src="plus_outline.svg" 
                    className="absolute -left-0 top-48 w-[30%]" 
                    variants={anim} 
                    initial="initial" 
                    whileInView="inView" 
                    transition={transition} 
                />

                <motion.img 
                    src="plus.svg" 
                    className="absolute right-[10%] bottom-0 w-[18%]" 
                    variants={anim} 
                    initial="initial" 
                    whileInView="inView" 
                    transition={transition}
                />
                <div className="w-fit text-white ml-[clamp(50%,20rem,80%)] pr-8 flex flex-col gap-4 mt-16">
                    <motion.p className="text-5xl"
                        variants={anim}   
                        initial="initial" 
                        whileInView="inView" 
                        transition={transition}
                    >How Fit Are you,<br /> Really ?</motion.p>
                    <motion.p 
                        className="font-light text-justify pr-32"
                        variants={anim} 
                        initial="initial" 
                        whileInView="inView" 
                        transition={{ duration:0.75, delay: 0.2, ease: "easeOut" }}
                    >
                        Physical fitness is key to a long life and good health. Your body’s capacity to transport and use oxygen during exercise (VO2 max) is the most precise measure of overall cardiovascular fitness.
                    </motion.p>

                    <Link to="/prompt" className="btn-base bg-green-400 w-fit text-black hover:bg-green-800 hover:text-white">Test Yourself now</Link>
                </div>
            </div>
        </MainLayout>
    )
}
