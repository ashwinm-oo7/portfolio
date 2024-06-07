import React from "react";

const SkillBar = ({ skill, level }) => (
  <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
    <span style={{ width: "20%", marginRight: "10px" }}>{skill}</span>
    <div style={{ width: "80%", height: "10px", backgroundColor: "#ddd" }}>
      <div
        style={{ width: `${level}%`, height: "10px", backgroundColor: "#333" }}
      ></div>
    </div>
  </div>
);

const SkillsSection = () => {
  const technicalSkills = [
    { skill: "React", level: 90 },
    { skill: "JavaScript", level: 75 },
    { skill: "Data Structures", level: 65 },
  ];

  const softSkills = [
    { skill: "HTML/CSS", level: 85 },
    { skill: "TypeScript", level: 70 },
    { skill: "SQL", level: 60 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Skills</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>Technical Skills</h3>
          {technicalSkills.map((techSkill) => (
            <SkillBar
              key={techSkill.skill}
              skill={techSkill.skill}
              level={techSkill.level}
            />
          ))}
        </div>
        <div>
          <h3>Soft Skills</h3>
          {softSkills.map((softSkill) => (
            <SkillBar
              key={softSkill.skill}
              skill={softSkill.skill}
              level={softSkill.level}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Get In Touch
        </button>
        <p>
          I'm currently looking for full-time React Developer/Frontend Developer
          opportunities! If you know of any positions available, please let me
          know.
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
