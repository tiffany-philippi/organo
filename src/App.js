import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import TeamBanner from "./components/TeamBanner";

function App() {
  const teamsList = [
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
  ];
  const [collaborators, setCollaborators] = useState([]);
  const create = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
    console.log(collaborators);
  };

  return (
    <div className="App">
      <Banner />
      <Form onCreate={(value) => create(value)} list={teamsList} />
      {teamsList.map((result) => (
        <TeamBanner
          key={result.value}
          team={result}
          collaboratorsList={collaborators.filter(
            (collaborator) => collaborator.team === result.name
          )}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
