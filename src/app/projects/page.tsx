import React from 'react';
import Layout from '@/components/layout/Layout';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project and what it does.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1-live.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project and its features.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">My Projects</h1>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 