
import './page.css'; 

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of the project, highlighting its main features and technologies used.',
    link: 'https://github.com/yourusername/project-one',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project, highlighting its main features and technologies used.',
    link: 'https://github.com/yourusername/project-two',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  //  to Add more projects here isA
];

export default function ProjectsPage() {
  return (
    <div className="projects-container">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
              View Project
            </a>
            <div className="mt-4">
              <span className="font-semibold text-gray-700">Technologies:</span>
              <ul className="list-disc pl-5 mt-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-600">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
