import hexToRgba from "hex-to-rgba";
import Collaborator from "../Collaborator";
import "./TeamBanner.css";

export const TeamBanner = (props) => {
  const css = props.team.primary;
  const team = props.team;

  return (
    props.collaboratorsList.length > 0 && (
      <section
        className={`teamBanner banner__${team.value}`}
        style={{ backgroundColor: hexToRgba(team.primary, "0.2") }}
      >
        <input
          type="color"
          className="teamBanner__inputColor"
          value={css}
          onChange={(e) => props.changeColor(e.target.value, team.name)}
        />
        <h3 style={{ borderColor: css }}>{team.name}</h3>
        <div className="teamBanner__collaborators">
          {props.collaboratorsList.map((v, i) => {
            return (
              <Collaborator
                key={v.name + i}
                colorTeam={css}
                collaborator={v}
                onDeleteCollaborator={props.onDeleteCollaborator}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
