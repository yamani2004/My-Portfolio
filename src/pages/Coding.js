import React, { useState } from "react";
import "./Coding.css";

function Coding() {
  const [skillGroups, setSkillGroups] = useState({
    Languages: ["C", "C++", "SQL", "JavaScript"],
    Frontend: ["HTML", "CSS", "React"],
    Tools: ["Git", "VS Code", "Node.js"],
    "CS Core": ["Data Structures", "Algorithms","DBMS","Operating System","OOPS"],
  });

  const [profiles, setProfiles] = useState([
    { name: "GitHub", link: "https://github.com/yamani2004" },
    { name: "LeetCode", link: "https://leetcode.com/u/yamani4744/" },
    { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/yamanisogjv7/" },
    { name: "CodeChef", link: "https://www.codechef.com/users/yamani47" }
  ]);

  const [editMode, setEditMode] = useState(false);
  const [devKey, setDevKey] = useState("");

  // Local inputs per skill group
  const [newSkills, setNewSkills] = useState(
    Object.keys(skillGroups).reduce((acc, group) => ({ ...acc, [group]: "" }), {})
  );

  const [newProfileName, setNewProfileName] = useState("");
  const [newProfileLink, setNewProfileLink] = useState("");

  // Developer login
  const handleDevLogin = () => {
    if (devKey === "YAMANI123") {
      setEditMode(true);
      setDevKey("");
    } else {
      alert("Invalid developer key!");
    }
  };

  // Add skill per group
  const handleAddSkill = (group) => {
    const skill = newSkills[group].trim();
    if (!skill) return;
    setSkillGroups({ ...skillGroups, [group]: [...skillGroups[group], skill] });
    setNewSkills({ ...newSkills, [group]: "" });
  };

  // Remove skill
  const removeSkill = (group, index) => {
    const updated = { ...skillGroups };
    updated[group] = updated[group].filter((_, i) => i !== index);
    setSkillGroups(updated);
  };

  // Add profile
  const handleAddProfile = () => {
    if (newProfileName.trim() && newProfileLink.trim()) {
      setProfiles([...profiles, { name: newProfileName.trim(), link: newProfileLink.trim() }]);
      setNewProfileName("");
      setNewProfileLink("");
    }
  };

  // Remove profile
  const removeProfile = (i) => {
    setProfiles(profiles.filter((_, index) => index !== i));
  };

  // Global update button
  const handleUpdateProfile = () => {
    // Here you could send data to backend or save to database
    alert("✅ All changes have been updated successfully!");
    setEditMode(false);
  };

  return (
    <section className="coding-section">
      <div className="coding-container">
        <h2 className="coding-title">💻 Coding Skills & Profiles</h2>
        <p className="coding-intro">
          Explore my tech stack and the platforms where I sharpen my coding skills.
        </p>

        {!editMode && (
          <div className="dev-login">
            <input
              type="password"
              placeholder="Enter developer key..."
              value={devKey}
              onChange={(e) => setDevKey(e.target.value)}
            />
            <button onClick={handleDevLogin}>Unlock</button>
          </div>
        )}

        {/* Skills Section */}
        <div className="skills-section">
          {Object.keys(skillGroups).map((group, idx) => (
            <div key={idx} className="skill-group-card">
              <h3 className="group-title">📌 {group}</h3>
              <div className="skills-grid">
                {skillGroups[group].map((skill, i) => (
                  <div key={i} className="skill-card">
                    {skill}
                    {editMode && (
                      <button
                        className="remove-btn"
                        onClick={() => removeSkill(group, i)}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {editMode && (
                <div className="add-skill">
                  <input
                    type="text"
                    placeholder={`Add new ${group} skill...`}
                    value={newSkills[group]}
                    onChange={(e) =>
                      setNewSkills({ ...newSkills, [group]: e.target.value })
                    }
                  />
                  <button onClick={() => handleAddSkill(group)}>➕ Add</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Profiles Section */}
        <h3 className="subheading">🌐 Coding Platforms</h3>
        <div className="profiles-section">
          {profiles.map((profile, i) => (
            <div key={i} className="profile-card">
              <h4>{profile.name}</h4>
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                Visit Profile
              </a>
              {editMode && (
                <button className="remove-btn" onClick={() => removeProfile(i)}>
                  ✕
                </button>
              )}
            </div>
          ))}

          {editMode && (
            <div className="add-profile">
              <input
                type="text"
                placeholder="Profile Name"
                value={newProfileName}
                onChange={(e) => setNewProfileName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Profile URL"
                value={newProfileLink}
                onChange={(e) => setNewProfileLink(e.target.value)}
              />
              <button onClick={handleAddProfile}>➕ Add Profile</button>
            </div>
          )}
        </div>

        {/* Global Update Button */}
        {editMode && (
          <div className="update-profile">
            <button onClick={handleUpdateProfile}>💾 Update Profile</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Coding;
