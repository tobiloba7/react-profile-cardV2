import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const my_skills = [
  {
    skill: "Python",
    level: "advanced",
    color: "red"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "pink"
  },
  {
    skill: "React",
    level: "beginner",
    color: "blue"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="coder-dawg.jpg" alt="profile-pic" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Ninja Dawg</h1>
      <p>Hi, I'm the coding dawg.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {my_skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  // let indicator = "";

  // if (skillObj.level === "advanced") {
  //   indicator = "ad";
  // } else if (skillObj.level === "intermediate") {
  //   indicator = "int";
  // } else if (skillObj.level === "beginner") {
  //   indicator = "bg";
  // }

  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <p>{skillObj.skill}</p>
      {/* using the &&-and operator for conditional rendering !short circuting */}
      <span>{skillObj.level === "advanced" && "ad"}</span>
      <span>{skillObj.level === "intermediate" && "int"}</span>
      <span>{skillObj.level === "beginner" && "bg"}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
