import { forwardRef, useRef } from "react"

export default forwardRef(function DropdownInput({ label, opts, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <div className="flex flex-col gap-1"> 
            <p>{label}</p>
            <select className="w-full border-gray-400 border-2 p-2 rounded-lg" ref={input} {...props} >
                {opts.map((o) => ( 
                    <option value={o.value} key={o.value}>{o.tag}</option>
                ))}
            </select>
        </div>
    )
})
