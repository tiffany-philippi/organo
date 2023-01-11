import "./InputText.css";

export const InputText = (props) => {
  const onType = (e) => {
    props.onChangeText(e.target.value);
  };

  return (
    <div className="inputText">
      <label className="inputText__label">{props.label}</label>
      <input
        value={props.text}
        required={props.required}
        type="text"
        onChange={onType}
        className="inputText__input"
        placeholder={`Type your ${props.label}`}
      />
    </div>
  );
};
