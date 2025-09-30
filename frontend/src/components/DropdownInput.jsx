export default function DropdownInput({ label, value, onChange, opts }) {
    return (
        <> 
            {console.log(opts)}
            <p>{label}</p>
            <select className="w-full" value={value} onChange={onChange}>
                {opts.map((o) => ( 
                    <option value={o.value} key={o.value}>{o.tag}</option>
                ))}
            </select>
        </>
    )
}
