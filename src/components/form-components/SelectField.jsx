const SelectField = ({ label, id, name, options, onChange }) => (
    <div>
        <label htmlFor={id}>{label}:</label>
        <select id={id} name={name} onChange={onChange} required>
            {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    </div>
);

export default SelectField;