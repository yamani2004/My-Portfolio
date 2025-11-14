import React from "react";
import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      school: "MNNIT Allahabad",
      year: "2022 – 2026",
      grade: "CGPA: 8.81",
      desc: "Pursuing my undergraduate degree. Focused on programming, algorithms, and full-stack web development skills."
    },
    {
      degree: "Higher Secondary (PCM)",
      school: "Dony Polo Public School",
      year: "2019 – 2021",
      grade: "Percentage: 92.6%",
      desc: "Completed senior secondary education with excellence in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School",
      school: "Nezamia Public School",
      year: "2018 – 2019",
      grade: "Percentage: 94.4%",
      desc: "Completed secondary education, building a strong academic foundation."
    }
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h2 className="education-title">My Education</h2>
        <p className="education-intro">
          A timeline of my academic milestones and achievements.
        </p>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-box">
                <h3>{edu.degree}</h3>
                <p className="school">{edu.school}</p>
                <p className="year">{edu.year}</p>
                <p className="grade">{edu.grade}</p>
                <p className="desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
