import Button from "../Button";
import Dropdown from "../Dropdown";
import InputText from "../InputText";
import "./Form.css";

const list = [
  "Data Science",
  "DevOps",
  "Front-End",
  "Innovation and Management",
  "Mobile",
  "Programming",
  "UX and Design",
];
const submit = (e) => {
  e.preventDefault();
};
const Form = () => {
  return (
    <section className="form">
      <form className="form__fields" onSubmit={submit}>
        <h2>Fill the fields to create a collaborator card</h2>
        <InputText required={true} label="name" />
        <InputText required={true} label="position" />
        <InputText type="file" label="image" />
        <Dropdown required={true} list={list} label="Team" />
        <Button text="Create">Create</Button>
      </form>
    </section>
  );
};

export default Form;
