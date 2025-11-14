import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const devImg =
  "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif";

function Home() {

  useEffect(() => {
    const canvas = document.getElementById("particle-bg");
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];

    function createParticles() {
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37, 99, 235, 0.6)";
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37,99,235,${1 - dist / 120})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Move particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    }

    createParticles();
    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section className="home-section">
      {/* Particle Background */}
      <canvas id="particle-bg" className="particle-bg"></canvas>

      <div className="home-container">
        {/* Left Section */}
        <div className="intro-card">
          <h1 className="intro-title">
            Hey, I'm <span className="highlight">Yamani</span> 👋
          </h1>

          <h2 className="intro-subtitle">Full Stack Developer & Web Enthusiast</h2>

          <p className="intro-text">
           I design and build clean, responsive, and efficient web experiences.
With a strong foundation in modern front-end development, I thrive on tackling complex problems and transforming ideas into intuitive, user-friendly digital solutions.
          </p>

          <p className="intro-text">             
          Skilled in <strong>React.js</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Mongo DB</strong>,
            <strong> HTML/CSS</strong>, and backend fundamentals, I focus on building
            scalable web apps while continuously learning and improving.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn primary-btn">🚀 View My Work</Link>
            <Link to="/contact" className="btn secondary-btn">✉️ Contact Me</Link>
          </div>
        </div>

        {/* Right Section – Developer Illustration */}
        <div className="image-container">
          <img src={devImg} alt="Developer illustration" className="developer-img" />
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="float-circle one"></div>
        <div className="float-circle two"></div>
        <div className="float-circle three"></div>
      </div>
    </section>
  );
}

export default Home;
