import "./Collaborator.css";

export const Collaborator = (props) => {
  const collaborator = props.collaborator;
  return (
    <div className="collaborator">
      <div
        className="collaborator__card"
        style={{ backgroundColor: props.colorTeam }}
      >
        <img
          src={collaborator.image}
          className="collaborator__image"
          alt={collaborator.name}
        />
      </div>

      <div className="collaborator__content">
        <p className="collaborator__name">{collaborator.name}</p>
        <p className="collaborator__position">{collaborator.position}</p>
      </div>
    </div>
  );
};
