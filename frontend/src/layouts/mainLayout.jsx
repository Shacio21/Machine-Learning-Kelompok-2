import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
        return(
            <>
                <div className="bg-[url(/background.webp)] bg-no-repeat bg-cover w-full h-full  z-[-1] top-0 left-0 fixed" />
                <div className="font-bold relative z-[1] bg-transparent">
                    <div className="sticky w-full py-4 px-2 flex font-add-italic justify-between bg-gradient-to-b from-black/90 to-white/0">
                        <div className="flex gap-2">

                            <Link to="/">
                                <img src="/icon.webp" className="w-16" />
                            </Link>

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
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </>
        )
    }
