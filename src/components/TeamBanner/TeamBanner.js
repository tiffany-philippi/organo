import Collaborator from "../Collaborator";
import "./TeamBanner.css";

export const TeamBanner = (props) => {
  const css = props.team.primary;
  const team = props.team;
  console.log(props.collaboratorsList);
  return (
    props.collaboratorsList.length > 0 && (
      <section className={`teamBanner banner__${team.value}`}>
        <h3 style={{ borderColor: css }}>{team.name}</h3>
        <div className="teamBanner__collaborators">
          {props.collaboratorsList.map((v, i) => (
            <Collaborator key={v.value + i} colorTeam={css} collaborator={v} />
          ))}
        </div>
      </section>
    )
  );
};
