import "./Dropdown.css";

export const Dropdown = (props) => {
  const onSelect = (e) => {
    props.onChangeText(e.target.value);
  };
  return (
    <div className="dropdown">
      <label className="dropdown__label">{props.label}</label>
      <select
        onChange={onSelect}
        value={props.text}
        className="dropdown__select"
        required={props.required}
      >
        {props.list.map((item) => (
          <option key={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};
