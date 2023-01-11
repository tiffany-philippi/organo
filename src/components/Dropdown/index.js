import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label className="dropdown__label">{props.label}</label>
      <select className="dropdown__select" required={props.required}>
        {props.list.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
