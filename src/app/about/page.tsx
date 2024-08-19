"use client"; 

import './page.css'; 

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Me</h1>
      <div className="content">
        <p className="text-lg text-gray-700 mb-6">
          I'm Ahmed Hamed, a dedicated software engineer driven by a passion for crafting innovative digital solutions. My journey began at Alamein International University, where I honed my skills in computer science with a specialization in software engineering. While my core focus lies in software development, my curiosity led me to explore the fascinating world of artificial intelligence. Through coursework and hands-on projects, I've gained a solid foundation in AI concepts and applications.
        </p>
        <div className="language-skills mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Language Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Native Arabic speaker with deep linguistic understanding.</li>
            <li>Proficient in English, enabling effective communication with diverse teams and clients worldwide.</li>
            <li>Working knowledge of German and basic French, expanding collaboration capabilities with international colleagues.</li>
          </ul>
        </div>
        <div className="location mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Location</h2>
          <p className="text-lg text-gray-700">
            Based in the vibrant city of Alexandria, Egypt, I'm immersed in a rich cultural environment that fuels my creativity and problem-solving abilities. Alexandria's historical significance and cosmopolitan atmosphere provide a unique backdrop for my work as a software engineer.
          </p>
        </div>
        <div className="technologies">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Technologies & Frameworks</h2>
          <p className="text-lg text-gray-700">
            I have experience with a diverse range of technologies and frameworks that empower me to build robust and efficient software solutions. These include:
          </p>
          <ul className="list-disc list-inside text-gray-600">
          <ul className="list-disc list-inside text-gray-600">
  <li>Programming Languages: Java, Python, C++, SQL, R</li>
  <li>Web Technologies: HTML, CSS, JavaScript</li>
  <li>Frameworks & Libraries: React, Node.js, Next.js</li>
  <li>Tools & Styling: Tailwind CSS, Git</li>
</ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
