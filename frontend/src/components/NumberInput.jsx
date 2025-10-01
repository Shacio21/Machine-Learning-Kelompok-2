import { forwardRef, useRef } from "react";

export default forwardRef(function NumberInput({ icon, label, ...props }, ref) {
    const input = ref ? ref : useRef();

    return(
        <div className="flex flex-col gap-1">
            <label className="text-xl"><i className={icon}></i>{label}</label>
            <input 
                type="number"
                className="border-2 border-gray-400 rounded-lg py-1 px-2"
                ref={input}
                {...props}
            />
        </div>
    )
})
