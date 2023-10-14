import React from "react";

const App = () => {
  const portfolioData = {
    name: "Ritika Yadav",
    reg:"21BCE10529",
    place: "New Delhi",
    skills: ["Cloud Practitioner","Proficient in Python, Java & C++", "Intermediate in Web Development(Mern)", "Beginner in Database(mySQL & MongoDB)"],
    projects: [
      {
        title: "Krishak Vridhhi | Agri-Tech Project",
        description: "Krishak Vridhi is an agriculture based web platform that helps farmer in selecting the suitable fertilizers for their crops based on land type and crops in use.",
      },
      
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>Registration no:</u> {portfolioData.reg}</h2>
          <h2><u>Postal Location:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>Hey! Ritika here, 21 Years of age and currently pursuing my B.Tech Degree from VIT-Bhopal in CSE-Core. I hold a strong enthusiasm towards coding and have been working towards it. I'm a intermediate in python & C++ and Javascript. I'm open to new opportunities and seeks for chances where i can develop my coding skills further.</p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;