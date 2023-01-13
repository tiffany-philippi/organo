import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import TeamBanner from "./components/TeamBanner";

function App() {
  const [teamsList, setTeams] = useState([
    {
      name: "Data Science",
      value: "dataScience",
      primary: "#A6D157",
    },
    {
      name: "DevOps",
      value: "devops",
      primary: "#E06B69",
    },
    {
      name: "Front-End",
      value: "frontend",
      primary: "#82CFFA",
    },
    {
      name: "Innovation and Management",
      value: "iandm",
      primary: "#FF8A29",
    },
    {
      name: "Mobile",
      value: "mobile",
      primary: "#FFBA05",
    },
    {
      name: "Programming",
      value: "programming",
      primary: "#57C278",
    },
    {
      name: "UX and Design",
      value: "uxdesign",
      primary: "#DB6EBF",
    },
  ]);
  const collaboratorsMock = [
    {
      name: "David Cook",
      position: "Full-Stack Developer",
      image:
        "https://images.unsplash.com/photo-1650378915828-e26d52007540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3M3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[4].name,
    },
    {
      name: "Caitlin Garcia",
      position: "IT coordinator",
      image:
        "https://images.unsplash.com/photo-1659899386025-82642de7b23f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[3].name,
    },
    {
      name: "Karen Robertson",
      position: "Network architect",
      image:
        "https://images.unsplash.com/photo-1670439999166-888c4386d15a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[1].name,
    },
    {
      name: "Nathan Pearson",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1668366322537-f63f5c1e62c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3N3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[3].name,
    },
    {
      name: "Julian Carr",
      position: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1669232514635-86d4295e0c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4Nnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[6].name,
    },
    {
      name: "Stephanie Vasquez",
      position: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1647642891405-fc8a70cab67f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4N3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[5].name,
    },
    {
      name: "Robert Hooper",
      position: "Service desk analyst",
      image:
        "https://images.unsplash.com/photo-1647643050583-3ab2bf9e3ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[1].name,
    },
    {
      name: "Victoria Wood",
      position: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1669422499685-496e79dea79c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[6].name,
    },
    {
      name: "Kevin Richardson",
      position: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1668620493730-72257c4f0b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[0].name,
    },
    {
      name: "Brandy Willis",
      position: "Full-Stack Developer",
      image:
        "https://images.unsplash.com/photo-1669178082499-341906b2ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      team: teamsList[4].name,
    },
    {
      name: "Matthew Brooks",
      position: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1670930775415-8c4c5bd0add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
      team: teamsList[2].name,
    },
  ];
  const [collaborators, setCollaborators] = useState(collaboratorsMock);
  const create = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };
  const deleteCollaborator = () => {
    // TODO: create action
    console.log("deletou");
  };

  const changeColorTeam = (color, id) => {
    setTeams(
      teamsList.map((team) => {
        if (team.name === id) {
          team.primary = color;
        }
        return team;
      })
    );
  };
  return (
    <div className="App">
      <Banner />
      <Form onCreate={(value) => create(value)} list={teamsList} />
      <section className="teamsList">
        <h1>My Teams</h1>
      </section>
      {teamsList.map((team) => (
        <TeamBanner
          key={team.value}
          team={team}
          collaboratorsList={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
          onDeleteCollaborator={deleteCollaborator}
          changeColor={changeColorTeam}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
