// components/ProjectsSection.jsx
import React from 'react';

const projects = [
  {
    title: "Sentiment Analysis Model",
    description: "An AI-powered sentiment analysis model and website that analyzes text data to determine sentiment polarity.",
    link: "https://github.com/June-Bajim/sentiment_Analysis_project",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects, skills, and professional journey as a full-stack developer.",
    link: "https://github.com/June-Bajim/June",
  },
  {
    title: "Nyeri Online Filming Site",
    description: "A collaborative work done to allow users especially film makers to view and book sites for their films.",
    // link: "/projects/mechatronics-lab",
  },
  {
    title: "Expense Tracker",
    description: "A simple expense tracker for users to track how they spend their income.",
    link: "https://github.com/June-Bajim/expenses-tracker",
  },

  {
    title: "Social Media Dahboard",
    description: "A Social Media Dashboard for Tech Trends is a web application built with Next.js (frontend) and Node.js (backend) to track and visualize the latest trends in the tech industry.",
    link: "https://github.com/June-Bajim/Social_media-dashbord",
  },
];

const ProjectsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 font-patrick text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-400 shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl text-blue-800 font-patrick font-bold mb-2">{project.title}</h2>
              <p className="text-gray-900 font-patrick mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-800 font-patrick hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
