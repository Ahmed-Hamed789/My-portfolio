"use client"; 

import './page.css';

export default function ExperiencePage() {
  return (
    <div className="experience-container">
      <h1 className="text-4xl font-bold text-gray-800">Experience</h1>
      <div className="experience-list">
        <div className="experience-item">
          <h2 className="text-2xl font-semibold text-gray-700">Software Engineer Intern</h2>
          <p className="text-gray-600">ITI (Information Technology Institute) , jan-2020 - july-2020</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Developed and maintained a javaFX Chatting app using websockets .</li>
            <li>Collaborated with cross-functional teams to design and implement new features.</li>
            <li>Optimized performance and improved code quality through code reviews and testing.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h2 className="text-2xl font-semibold text-gray-700">Web Development engineer</h2>
          <p className="text-gray-600">Euclid Solutions , Jun-2024 - present</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Assisting in building responsive web pages using prominent frameworks like next.js with node.js and typescript , with tailwind  and react for styling  .</li>
            <li>Working on backend integration with RESTful APIs.</li>
            <li>Contributing to debugging and troubleshooting website issues.</li>
          </ul>
        </div>
        {/* here to add more items isA */}
      </div>
    </div>
  );
}
