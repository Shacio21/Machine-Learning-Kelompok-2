import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
    const [about, setAbout] = useState(false);

    const aboutPopUp = () => {
        return (
            <>
                {about && (
                    <div className="absolute top-0 left-0 w-full h-full z-10 flex bg-black/50 text-gray-600 font-normal">
                        <div className="w-1/3 bg-gray-100 p-8 rounded-lg mx-auto mt-20 h-fit pb-20 flex flex-col relative">
                            <div className="w-fit mx-auto mt-4 border-2 border-gray-300 p-6 rounded-lg">
                                <p className="font-bold bg-gray-300 p-4 rounded-lg mb-4 text-2xl">Tugas Minggu ke-2 <br/>Praktek Machine Learning.</p>
                                <p className="text-xl font-add-italic">Anggota Kelompok : </p>
                                <ul>
                                    <li>223443075 Bagas Poetra Aditama</li>
                                    <li>223443086 Muhammad Dirgam Shacio</li>
                                    <li>223443087 Muhammad Ulwan Zuhdi</li>
                                    <li>223443090 Raihan Taufik Suryana</li>
                                    <li>223443093 Roofi Ahmad</li>
                                    <li>223443092 Rausyan Fikri Rukin Aman</li>
                                </ul>
                            </div>
                            <button onClick={()=> setAbout(!about)} className="absolute bottom-4 left-4">
                                <i className="bi bi-arrow-left-circle text-4xl hover:text-5xl object-center duration-300 ease-in-out"></i>
                            </button>
                            <p className="text-2xl absolute bottom-4 right-4 font-add-italic">
                                3-AEC-4
                            </p>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return(
        <>
            <div className="bg-[url(/background.webp)] bg-no-repeat bg-cover w-full h-full  z-[-1] top-0 left-0 fixed" />
            {aboutPopUp()}

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
                            <button className="text-xl" onClick={()=> setAbout(!about)}>About</button>
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
