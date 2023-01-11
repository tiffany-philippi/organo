import "./InputText.css";

const InputText = (props) => {
  return (
    <div className="inputText">
      <label className="inputText__label">{props.label}</label>
      <input
        required={props.required}
        type={props.type ?? "text"}
        className="inputText__input"
        placeholder={`Type your ${props.label}`}
      />
    </div>
  );
};

export default InputText;
