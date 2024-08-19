"use client"; // Ensure this file is treated as a Client Component

import './page.css'; // Import the Tailwind CSS file

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
      <p className="mt-4 text-lg text-gray-600">
        Hi, I'm a passionate software engineering student with a keen interest in web development, algorithms, and AI. I enjoy working on full-stack applications, learning new technologies, and contributing to open-source projects.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        My journey began with an enthusiasm for problem-solving, and over the years, I've honed my skills in languages like JavaScript, Python, and TypeScript. I love working with frameworks like Next.js, and I am constantly exploring new tools to enhance my development workflow.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        Outside of coding, I enjoy reading tech blogs, participating in hackathons, and collaborating with peers on exciting projects. My goal is to become a well-rounded software engineer who can create efficient and impactful software solutions.
      </p>
    </div>
  );
}
