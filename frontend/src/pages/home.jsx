import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

export default function Home() {
    return (
        <MainLayout>
            <div className="relative">
                <div className="w-fit text-white ml-[clamp(50%,20rem,80%)] pr-8 flex flex-col gap-4 mt-16">
                    <p className="text-5xl">How Fit Are you,<br /> Really ?</p>
                    <p className="font-light text-justify pr-32">
                        Physical fitness is key to a long life and good health. Your body’s capacity to transport and use oxygen during exercise (VO2 max) is the most precise measure of overall cardiovascular fitness.
                    </p>

                    <Link to="/prompt" className="btn-base bg-green-400 w-fit text-black hover:bg-green-800 hover:text-white">Test Yourself now</Link>
                </div>
            </div>
        </MainLayout>
    )
}
