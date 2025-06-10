import "./InputField.css";

export function InputField({ name, label, type, value, onChange }) {
  return (
    <div className="input-field-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
