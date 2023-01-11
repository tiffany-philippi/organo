import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import InputText from "../InputText";
import "./Form.css";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState(props.list[0].name);

  const submit = (e) => {
    e.preventDefault();
    console.log("a", name, position, image, team);
    props.onCreate({ name, position, image, team });
    setName("");
    setPosition("");
    setImage("");
    setTeam(props.list[0].name);
  };

  return (
    <section className="form">
      <form className="form__fields" onSubmit={submit}>
        <h2>Fill the fields to create a collaborator card</h2>
        <InputText
          text={name}
          onChangeText={(text) => setName(text)}
          required={true}
          label="name"
        />
        <InputText
          text={position}
          onChangeText={(text) => setPosition(text)}
          required={true}
          label="position"
        />
        <InputText
          text={image}
          onChangeText={(text) => setImage(text)}
          required={true}
          label="image"
        />
        <Dropdown
          text={team}
          onChangeText={(text) => setTeam(text)}
          required={true}
          list={props.list}
          label="Team"
        />
        <Button text="Create">Create</Button>
      </form>
    </section>
  );
};
