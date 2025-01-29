function FormField({ label, type, id, name, onChange, onFocus, error }) {
    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} onChange={onChange} onFocus={onFocus}/>
            {error ? <p className="error">{error}</p>: <p className="error">{error}</p>}
        </div>
    );
}
export default FormField;