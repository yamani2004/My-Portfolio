import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([
    {
        title: "JobFinder",
        desc: `JobFinder is a comprehensive MERN stack application designed to help users discover, post, and manage job opportunities efficiently. 
      It features user authentication via JWT, allowing both job seekers and employers to securely access the platform. 
      Employers can post new jobs, manage listings, and review applications, while job seekers can search, filter, and apply for positions. 
      The application also includes optional admin moderation for quality control, ensuring reliable and relevant job listings.`,
        tech: [
          "React.js",
          "Redux Toolkit",
          "Tailwind CSS",
          "React Router",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT Authentication"
        ],
        github: "https://github.com/yamani2004/jobfinder", // Add GitHub repo link
        highlight: true,
        editMode: false
      },
            
    {
        title: "FileShare",
        desc: `FileShare is a secure and minimalistic file-sharing web application that allows users to upload, share, and manage files online. 
      It features user authentication via JWT, encrypted file storage, automatic link expiration, and role-based access control. 
      Users can register, log in, upload files to the server or cloud storage (e.g., Cloudinary), and generate shareable links that expire after a configurable time. 
      The app emphasizes privacy, security, and a smooth user experience.`,
        tech: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT Authentication",
          "Cloudinary",
          "Axios",
          "Tailwind CSS",
          "React Router",
          "Multer"
        ],
        github: "https://github.com/yamani2004/FileShare_APP", // Add GitHub repo link
        highlight: true,
        editMode: false
      },
    {
        title: "URL Shortener",
        desc: `A modern URL Shortener web app that allows users to shorten long URLs, track link clicks, and manage their short links in a user-friendly dashboard.
      
      Features include secure authentication, custom short URLs, analytics for tracking clicks, and a responsive design that works seamlessly across devices. This project demonstrates backend and frontend integration using modern technologies.`,
        tech: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT Authentication",
          "Tailwind CSS",
          "Axios",
          "React Router"
        ],
        // Replace with live demo link
        github: "https://github.com/yamani2004/URL_SHORTENER", // Replace with your GitHub link
        highlight: true
      }
      
  ]);

  const [devMode, setDevMode] = useState(false); // Only you can toggle edit mode
  const [devKey, setDevKey] = useState(""); // Your developer key

  // Check developer key
  const handleDevLogin = () => {
    if (devKey === "YAMANI123") { // Change to your secret key
      setDevMode(true);
      setDevKey("");
    } else {
      alert("Invalid developer key!");
    }
  };

  // Toggle project edit mode
  const toggleEditMode = (index) => {
    const updated = [...projects];
    updated[index].editMode = !updated[index].editMode;
    setProjects(updated);
  };

  // Update project details
  const handleUpdateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  // Add a new project
  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "New Project",
        desc: "Describe your project here",
        tech: ["Tech1", "Tech2"],
        github: "#",
        highlight: false,
        editMode: true,
      },
    ]);
  };

  // Remove a project
  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">🚀 Personal Projects</h2>
      <p className="projects-subtitle">
        A collection of my projects demonstrating my skills in full-stack development.
      </p>

      {/* Developer login */}
      {!devMode && (
        <div className="dev-login">
          <input
            type="password"
            placeholder="Enter developer key..."
            value={devKey}
            onChange={(e) => setDevKey(e.target.value)}
          />
          <button onClick={handleDevLogin}>Unlock Admin</button>
        </div>
      )}

      <div className="projects-container">
        {projects.map((p, i) => (
          <div key={i} className={`project-card ${p.highlight ? "highlight" : ""}`}>

            {/* Remove button visible only to dev */}
            {devMode && (
              <button className="remove-btn" onClick={() => removeProject(i)}>✕</button>
            )}

            {p.editMode && devMode ? (
              <div className="add-project">
                <input
                  type="text"
                  value={p.title}
                  onChange={(e) => handleUpdateProject(i, "title", e.target.value)}
                  placeholder="Project Title"
                />
                <textarea
                  value={p.desc}
                  onChange={(e) => handleUpdateProject(i, "desc", e.target.value)}
                  placeholder="Project Description"
                  rows="4"
                />
                <input
                  type="text"
                  value={p.tech.join(", ")}
                  onChange={(e) => handleUpdateProject(i, "tech", e.target.value.split(",").map(t => t.trim()))}
                  placeholder="Technologies (comma separated)"
                />
                <input
                  type="text"
                  value={p.demo}
                  onChange={(e) => handleUpdateProject(i, "demo", e.target.value)}
                  placeholder="Demo Link"
                />
                <input
                  type="text"
                  value={p.github}
                  onChange={(e) => handleUpdateProject(i, "github", e.target.value)}
                  placeholder="GitHub Link"
                />
                <button className="btn update" onClick={() => toggleEditMode(i)}>✅ Update Project</button>
              </div>
            ) : (
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tech-stack">
                  {p.tech.map((t, idx) => <span key={idx} className="tech-item">{t}</span>)}
                </div>
                <div className="project-links">
                  {/* <a href={p.demo} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a> */}
                  <a href={p.github} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
                </div>
                {devMode && (
                  <div className="project-actions">
                    <button className="btn update" onClick={() => toggleEditMode(i)}>✏️ Edit Project</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add new project button visible only to dev */}
      {devMode && (
        <div className="project-actions">
          <button className="btn add" onClick={addProject}>➕ Add Project</button>
        </div>
      )}
    </section>
  );
}

export default Projects;
