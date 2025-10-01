import { useEffect, useRef, useState } from "react";
import NumberInput from "../components/NumberInput";
import DropdownInput from "../components/DropdownInput";
import MainLayout from "../layouts/mainLayout";
import scrollIntoView from "scroll-into-view-if-needed";

export default function Prompt() {
    const [maxCard, setMaxCard] = useState(1);
    const [lastCard, setLastCard] = useState(1);
    const endElement = useRef(null);

    /* NOTE: input data */
    const [data, setData] = useState({ 
        age: 0,
        height: 0,
        weight: 0,
        duration_minutes: 0,
        calories_burned: 0,
        avg_heart_rate: 0,
        hours_sleep: 0,
        stress_level: 0,
        daily_steps: 0,
        hydration_level: 0,
        resting_heart_rate: 0,
        blood_pressure_systolic: 0,
        blood_pressure_diastolic: 0,
        gender: 0,
        activity_type: "",
        intensity: "",
        smoking_status: "",
    });

    const incrementCard = () => {
        setLastCard(maxCard);

        const nextCard = maxCard+1;
        setMaxCard(nextCard);
        
        console.log(lastCard +">"+ maxCard);
    }

    useEffect(() => {
        if (maxCard > lastCard)
        {
            scrollIntoView(endElement.current, {
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
                scrollMode: 'always',
            });
        }
    }, [maxCard]);

    const canContinueOnFirstCard = () => { return data.age != 0 && data.height != 0 && data.weight != 0; }
    const canContinueOnSecondCard = () => { return data.duration_minutes != 0 && data.calories_burned != 0 && data.daily_steps != 0; }
    const canContinueOnThirdCard = () => { return data.avg_heart_rate != 0 && data.resting_heart_rate != 0 && data.blood_pressure_diastolic != 0 && data.blood_pressure_systolic; }
    const canContinueOnFourthCard = () => { return data.hours_sleep != 0 && data.stress_level != 0 && data.hydration_level != 0; }
    const canContinueOnFifthCard = () => { return data.gender != 0 && data.activity_type != "" && data.intensity != "" && data.smoking_status != "" } 

    const firstCard = () => {
        return (
            <section className="w-1/3">
                {maxCard >= 1 && (
                    <div className="flex flex-col relative bg-white px-8 pt-8 pb-20 rounded-lg gap-4">
                        <NumberInput 
                            label="Age"
                            value={data.age}
                            onChange={(e)=> { setData(prev => ({ ...prev, age:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Height (cm)"
                            value={data.height}
                            onChange={(e)=> { setData(prev => ({ ...prev, height:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Weight (Kg)"
                            value={data.weight}
                            onChange={(e)=> { setData(prev => ({ ...prev, weight:e.target.value })) }}
                        />
                        {maxCard === 1 && (
                            <button className="button-arrow" onClick={incrementCard} disabled={!canContinueOnFirstCard()}>
                                <i className="text-3xl bi bi-arrow-down-circle-fill"></i>
                            </button>
                        )}
                    </div>
                )} 
            </section>
        )
    }

    const secondCard = () => {
        return (
            <section className="w-1/3">
                {maxCard >= 2 && (
                    <div className="flex flex-col relative bg-white px-8 pt-8 pb-20 rounded-lg gap-4">
                        <NumberInput 
                            label="Daily Exercise Duration (Minutes)"
                            value={data.duration_minutes}
                            onChange={(e)=> { setData(prev => ({ ...prev, duration_minutes:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Calories (kkal)"
                            value={data.calories_burned}
                            onChange={(e)=> { setData(prev => ({ ...prev, calories_burned:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Daily Steps"
                            value={data.daily_steps}
                            onChange={(e)=> { setData(prev => ({ ...prev, daily_steps:e.target.value })) }}
                        />
                        {maxCard === 2 && (
                            <button className="button-arrow" onClick={incrementCard} disabled={!canContinueOnSecondCard()}>
                                <i className="text-3xl bi bi-arrow-down-circle-fill"></i>
                            </button>
                        )}
                    </div>
                )}
            </section>
        )
    }

    const thirdCard = () => {
            
        return (
            <section className="w-1/3">
                {maxCard >= 3 && (
                    <div className="flex flex-col relative bg-white px-8 pt-8 pb-20 rounded-lg gap-4">
                        <NumberInput 
                            label="Average Heart Rate (bpm)"
                            value={data.avg_heart_rate}
                            onChange={(e)=> { setData(prev => ({ ...prev, avg_heart_rate:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Average Resting Heart Rate (bpm)"
                            value={data.resting_heart_rate}
                            onChange={(e)=> { setData(prev => ({ ...prev, resting_heart_rate:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Blood Pressure Systolic"
                            value={data.blood_pressure_systolic}
                            onChange={(e)=> { setData(prev => ({ ...prev, blood_pressure_systolic:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Blood Pressure Diastoslic"
                            value={data.blood_pressure_diastolic}
                            onChange={(e)=> { setData(prev => ({ ...prev, blood_pressure_diastolic:e.target.value })) }}
                        />
                        {maxCard === 3 && (
                            <button className="button-arrow" onClick={incrementCard} id="card-3" disabled={!canContinueOnThirdCard()}>
                                <i className="text-3xl bi bi-arrow-down-circle-fill"></i>
                            </button>
                        )}
                    </div>
                )}
            </section>
        )
    }

    const fourthCard = () => {
        return (
            <section id="card-4" className="w-1/3">
                {maxCard >= 4 && (
                    <div className="flex flex-col relative bg-white px-8 pt-8 pb-20 rounded-lg gap-4">
                        <NumberInput 
                            label="Hours Slept"
                            value={data.hours_sleep}
                            onChange={(e)=> { setData(prev => ({ ...prev, hours_sleep:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Stress Level"
                            value={data.stress_level}
                            onChange={(e)=> { setData(prev => ({ ...prev, stress_level:e.target.value })) }}
                        />
                        <NumberInput 
                            label="Hydration Level"
                            value={data.hydration_level}
                            onChange={(e)=> { setData(prev => ({ ...prev, hydration_level:e.target.value })) }}
                        />
                        {maxCard === 4 && (
                            <button className="button-arrow" onClick={incrementCard} disabled={!canContinueOnFourthCard()}>
                                <i className="text-3xl bi bi-arrow-down-circle-fill"></i>
                            </button>
                        )}
                    </div>
                )}
            </section>
        )
    }

    const gender = [ { tag: "Male", value:1 }, { tag:"Female", value:0 } ]
    const intensity = [ { tag: "High", value: "High" }, { tag:"Medium", value:"Medium" }, { tag:"Low", value:"Low" } ]
    const smoking_status = [ { tag: "Never", value:"Never" }, { tag:"Currently Yes", value:"Current" }, { tag:"Former Smoker", value:"Former Smoker" } ]
    const activity_type = [ 
        { tag: "Yoga", value: "Yoga" },
        { tag: "Weight Training", value:"Weight_Training"},
        { tag: "High Intensive Interval Training", value:"HIIT"},
        { tag: "Dancing", value:"Dancing"},
        { tag: "Cycling", value:"Cycling"},
        { tag: "Basketball", value:"Basketball"},
        { tag: "Tennis", value:"Tennis"},
        { tag: "Walking", value:"Walking"},
        { tag: "Swimming", value:"Swimming"},
        { tag: "Running", value:"Running"},
    ]

    const fifthCard = () => {
        return (
            <section id="card-5" className="w-1/3">
                {maxCard >= 5 && (
                    <div className="flex flex-col relative bg-white px-8 pt-8 pb-20 rounded-lg gap-4">
                        <DropdownInput 
                            label="Gender"
                            opts={gender}
                            value={data.gender}
                            onChange={(e)=> { setData(prev => ({ ...prev, gender:e.target.value })) }}
                        />
                        <DropdownInput 
                            label="Sports Activities"
                            opts={activity_type}
                            value={data.activity_type}
                            onChange={(e)=> { setData(prev => ({ ...prev, activity_type:e.target.value })) }}
                        />
                        <DropdownInput 
                            label="Sports routine Intensity"
                            opts={intensity}
                            value={data.intensity}
                            onChange={(e)=> { setData(prev => ({ ...prev, intensity:e.target.value })) }}
                        />
                        <DropdownInput 
                            label="Current Smoking Status"
                            opts={smoking_status}
                            value={data.smoking_status}
                            onChange={(e)=> { setData(prev => ({ ...prev, smoking_status:e.target.value })) }}
                        />
                        <button type="submit" className="btn-base bg-black hover:bg-green-400 absolute bottom-6 left-8 text-white disabled:bg-gray-200" disabled={canContinueOnFifthCard()}>
                            Submit
                        </button>
                    </div>
                )}
            </section>
        )
    }

    return (
        <MainLayout>
            <div className="mt-10 w-full pb-20 font-normal flex flex-col gap-20 items-center justify-center">
                {firstCard()}
                {secondCard()}
                {thirdCard()}
                {fourthCard()}
                {fifthCard()}
            </div>
            <div ref={endElement} className=" p-5 absolute bottom-0"></div>
        </MainLayout>
    )
}
