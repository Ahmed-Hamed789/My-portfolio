"use client"; 

import './globals.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-light-slate-gray mb-8">
            I'm Ahmed Hamed, a software engineer with a passion for creating innovative and impactful digital solutions.
          </p>
          <a href="#projects" className="cta-button">Explore My Work</a>
        </div>
      </header>
      <section id="projects" className="projects-preview">
        <h2 className="text-3xl font-semibold text-white mb-4">Featured Projects</h2>
        <p className="text-lg text-light-slate-gray mb-6">
          Discover some of the projects I’ve worked on, showcasing my skills and expertise in various technologies.
        </p>
        {/* here we add projects isA */}
      </section>
      <footer className="footer">
        <p className="text-sm text-light-slate-gray">
          &copy; {new Date().getFullYear()} Ahmed Hamed. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
