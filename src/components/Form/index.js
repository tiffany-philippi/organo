import InputText from "../InputText";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form className="form__fields">
        <InputText label="name" />
        <InputText label="job" />
        <InputText type="file" label="image" />
      </form>
    </section>
  );
};

export default Form;
