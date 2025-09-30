import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
        return(
            <>
                <div className="w-full h-full bg-black bg-white-500 absolute opacity-60 z-[0]" />
                <div className="font-bold z-[1] bg-gradient-to-b from-black/90 to-white/0">
                    <div className="sticky w-full py-4 px-2 flex font-add-italic justify-between">
                        <div className="flex gap-2">
                            <img src="/icon.webp" className="w-16" />
                            <div className="flex flex-col">
                                <p className="text-xl/tight text-green-400">Healthy</p>
                                <p className="text-xl/tight text-white">Level Fitness</p>
                            </div>
                        </div>

                        <div className="flex gap-4 h-full text-center items-center mt-1 px-4">
                            <div className="flex gap-1 px-4 py-2 rounded-lg hover:bg-green-500 text-white hover:text-black duration-300 ease-in-out">
                                <Link to="/" className="text-xl">About</Link>
                                <i className="bi bi-patch-question-fill text-[1.2rem]"></i>
                            </div>
                            <div className="flex gap-1 p-2 rounded-lg hover:bg-green-500 text-white hover:text-black duration-300 ease-in-out">
                                <Link to="/" className="text-xl">Contact</Link>
                                <i className="bi bi-telephone-fill text-[1.2rem]"></i>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full">
                        {children}
                    </div>
                </div>
            </>
        )
    }
