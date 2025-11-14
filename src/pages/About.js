import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-intro">
          Hi 👋, I'm <span className="highlight">Sohaib Yamani</span> — a 
          passionate <strong>Full Stack Developer</strong> and 
          <strong> B.Tech student at MNNIT Allahabad</strong>, driven by the 
          goal of building clean, efficient, and impactful digital experiences.
        </p>

        <div className="about-content">

          {/* ABOUT TEXT */}
          <div className="about-text">
            <p>
              I enjoy crafting responsive and visually appealing user interfaces using 
              <strong> React, JavaScript, and modern UI/UX principles</strong>. 
              With a background in Electronics & Communication Engineering, I combine 
              analytical thinking with creative problem-solving to build products that 
              are both functional and user-friendly.
            </p>

            <p>
              I’ve built full-stack projects such as 
              <strong> a Job Finder MERN App</strong> and 
              <strong> a Secure FileShare System</strong>, where I worked on 
              authentication, APIs, cloud integration, and UI development.  
              I'm constantly learning and exploring technologies that enhance my 
              capabilities as a developer.
            </p>

            <p>
              Outside of coding, I love mentoring juniors, contributing to tech events, 
              and participating in hackathons. I aim to grow into a well-rounded 
              developer who builds tools that simplify real-world problems.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="about-boxes">
            
            <div className="info-box">
              <h3>🎓 Education</h3>
              <p>
                B.Tech in Electronics & Communication Engineering  
                <br /> <strong>MNNIT Allahabad (2022–2026)</strong>  
                <br /> CGPA: 8.81
              </p>
            </div>

            <div className="info-box">
              <h3>💡 Technical Skills</h3>
              <p>
                React · JavaScript · C · C++ · HTML · CSS · Node.js · Express.js  
                <br /> MongoDB · Git · Responsive Design
              </p>
            </div>

            <div className="info-box">
              <h3>🚀 Projects</h3>
              <p>
                JobFinder MERN App · FileShare App  
                <br /> API Integration · Auth Systems · Cloud (Cloudinary)
              </p>
            </div>

            <div className="info-box">
              <h3>🏅 Achievements</h3>
              <p>
                HackVega 2025 · CodeSangam 2023  
                <br /> AIR 533 in COMEDK (2021)
              </p>
            </div>

            <div className="info-box">
              <h3>📌 Roles</h3>
              <p>
                SMP Mentor — Guided 60+ students, helped them navigate academics 
                and high-stress scenarios effectively.
              </p>
            </div>

            <div className="info-box">
              <h3>🌟 Interests</h3>
              <p>
                Web Development · DSA · Cloud  
                <br /> Open Source · Problem Solving
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
