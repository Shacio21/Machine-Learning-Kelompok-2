import { Link, useLocation } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import { useEffect, useState } from "react";

export default function Result() {
    const location = useLocation();
    const prediction = location.state?.prediction;

    const [category, setCategory] = useState("");
    const [percentage, setPercentage] = useState(0);
    const [color, setColor] = useState("");

    const CircleProgress = () => {
        const size = 240; 
        const strokeWidth = 32
        const circleColor = "#e6e6e6"; 
        const radius = (size - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        return (
            <div className={`relative w-[${size}] h-[${size}]`}>
                <svg width={size} height={size}>
                    <circle
                        stroke={circleColor}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                    <circle
                        stroke={color}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeLinecap="box"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        style={{ transition: "stroke-dashoffset 2s" }}
                    />
                </svg>
                <div className="absolute bg-white px-6 py-1 bottom-[48%] left-[86%]" />
                <p className="absolute bottom-2/5 left-2/6 text-4xl text-center">{percentage}%</p>
            </div>
        );
    };

    const handleCategory = async () => {
        console.log(typeof(prediction));
        console.log(prediction);

        const res = await fetch("http://localhost:8000/fitness-category", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "kelompok2nihbukan1"
            },
            body: JSON.stringify({"prediction":prediction}),
        });

        const result = await res.json();
        setCategory(result.category);
        switch(result.category) {
            case 'Very-Low': return setColor("#ff0022");
            case 'Low': return setColor("#FC5A3A");
            case 'Medium': return setColor("#FCEF3A");
            case 'High': return setColor("#B5FC3A");
            case 'Very-High': return setColor("#00FF4C");
        }
    }

    const maxRate = 25;
    useEffect(() => {
        handleCategory();
        setPercentage(((prediction / maxRate) * 100).toFixed(1));
    })

    /* NOTE: Fitness Range : 0-25 */

    return (
        <MainLayout>
            <div className="bg-white p-16 rounded-lg w-[40%] mx-auto mt-20 relative">
                <p className="text-2xl font-add-italic">So, Your Fitness Level is:</p>
                <div className="flex my-4 justify-center w-full gap-4">
                    {CircleProgress()}
                    <div className="flex items-center text-center w-fit mr-auto">
                        <p className="text-xl font-add-italic">You're expected fitness level is <br/><span className="text-4xl">{category}</span></p>
                    </div>
                </div>
                <Link to="/prompt" className="btn-base hover:bg-green-500 bg-black text-white absolute right-4 bottom-4">Test Again!</Link>
            </div>
        </MainLayout>
    )
}
