export default function CheckboxInput({ label, value, onChange }) {

    const onHandleChange = (val) => {
        onChange(val);
    }

    return (
        <div className="flex gap-2 items-center">
            <p className="text-xl">{label}</p>
            <input type="checkbox" 
                value={value}
                onChange={(e) => onHandleChange(e.target.value)}
            />
        </div>
    )
}
