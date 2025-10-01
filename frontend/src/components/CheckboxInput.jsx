import { forwardRef, useRef } from "react";

export default forwardRef(function CheckboxInput({ label, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <div className="flex gap-2 items-center">
            <p className="text-xl">{label}</p>
            <input type="checkbox" 
                {...props}
                ref={input}
            />
        </div>
    )
})
