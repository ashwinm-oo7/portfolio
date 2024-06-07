import React from "react";

const ProjectCard = ({
  title,
  lastUpdated,
  languages,
  repoLink,
  cloneLink,
}) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem" }}>
      <h3>{title}</h3>
      <p>Last updated on: {lastUpdated}</p>
      <p>Languages used: {languages.join(", ")}</p>
      <button onClick={() => (window.location.href = repoLink)}>Repo</button>
      <button onClick={() => (window.location.href = cloneLink)}>
        Clone Project
      </button>
    </div>
  );
};

const RecentProjects = () => {
  const projects = [
    {
      title: "myportfolio",
      lastUpdated: "January 17, 2024",
      languages: ["JavaScript", "SCSS", "HTML"],
      repoLink: "#",
      cloneLink: "#",
    },
    // ... other projects
  ];

  return (
    <section>
      <h2>Recent Projects</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
