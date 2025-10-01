import MainLayout from "../layouts/mainLayout";

export default function Result({ result }) {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-lg w-1/2 mx-auto mt-20">
                <p className="text-2xl font-add-italic">Your Fitness Test Result</p>
            </div>
        </MainLayout>
    )
}
