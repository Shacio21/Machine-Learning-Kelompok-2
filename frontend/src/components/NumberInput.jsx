import { forwardRef, useRef, useState } from "react";

export default forwardRef(function NumberInput({ icon, label, onChange, min, max, ...props }, ref) {
    const input = ref ? ref : useRef();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        let newValue = e.target.value;

        setValue(newValue);

        if (newValue !== "") {
            const num = Number(newValue);
            if (min !== undefined && num < min) {
                setError(`Value must be ≥ ${min}`);
            } else if (max !== undefined && num > max) {
                setError(`Value must be ≤ ${max}`);
            } else {
                setError(""); 
            }
        } else {
            setError(""); 
        }

        if (onChange) {
            onChange(e);
        }
    };

    return(
        <div className="flex flex-col gap-1">
            <label className="text-xl"><i className={icon}></i>{label}</label>
            <input 
                type="number"
                className="border-2 border-gray-400 rounded-lg py-1 px-2"
                value={value}
                min={min}
                max={max}
                onChange={handleChange}
                ref={input}
                {...props}
            />
            <label className="text-red-400">{error}</label>
        </div>
    )
})
