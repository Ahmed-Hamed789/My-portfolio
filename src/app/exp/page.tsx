"use client"; // Ensure this file is treated as a Client Component

import './page.css'; // Import the Tailwind CSS file

export default function ExperiencePage() {
  return (
    <div className="experience-container">
      <h1 className="text-4xl font-bold text-gray-800">Experience</h1>
      <div className="experience-list">
        <div className="experience-item">
          <h2 className="text-2xl font-semibold text-gray-700">Software Engineer Intern</h2>
          <p className="text-gray-600">Tech Company, 2023 - Present</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Developed and maintained web applications using React and Next.js.</li>
            <li>Collaborated with cross-functional teams to design and implement new features.</li>
            <li>Optimized performance and improved code quality through code reviews and testing.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2 className="text-2xl font-semibold text-gray-700">Web Development Intern</h2>
          <p className="text-gray-600">Another Tech Company, 2022 - 2023</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Assisted in building responsive web pages using HTML, CSS, and JavaScript.</li>
            <li>Worked on backend integration with RESTful APIs.</li>
            <li>Contributed to debugging and troubleshooting website issues.</li>
          </ul>
        </div>
        {/* Add more experience items here */}
      </div>
    </div>
  );
}
