const FormField = ({ label, type, id, name, onChange }) => (
    <div>
        <label htmlFor={id}>{label}:</label>
        <input type={type} id={id} name={name} onChange={onChange} required />
    </div>
);

export default FormField;