// components/ProjectsSection.jsx
import React from 'react';

const projects = [
  {
    title: "Virtual Mechatronics Labs Website",
    description: " This platform serves as a central hub showcasing the lab's innovative projects in virtual reality, robotics, AI, and mechatronics. Key features include interactive 3D models, an integrated e-commerce section for mechatronic devices, and detailed information on research initiatives and collaborations. The website aims to promote VML's work, facilitate product sales, and provide an engaging user experience through cutting-edge technology",
    link: "https://vml.dkut.ac.ke/",
  },
  {
    title: "Virtual Mechatronics Labs ERP System",
    description: "The VML ERP System is a centralized platform designed to streamline and manage the core operations of the Virtual Mechatronics Lab. It enables administrators to efficiently oversee and coordinate staff, students, projects, and equipment from a single, secure interface. The system is accessible to all registered users, including staff, students, and equipment interfaces, ensuring seamless collaboration and real-time updates",
    link: "https://vmlab.dkut.ac.ke/",
  },
  {
    title: "Sentiment Analysis Model",
    description: "This project features an AI-driven sentiment analysis model integrated into a responsive website interface. The system processes user-inputted text to determine the sentiment polarity—classifying it as positive, negative, or neutral. Built using machine learning and natural language processing (NLP) techniques, the model was trained on labeled text data to accurately detect emotional tone in real-time.",
    link: "https://github.com/June-Bajim/sentiment_Analysis_project",
  },

  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio showcasing projects, skills, and professional journey as a full-stack developer.",
  //   link: "https://github.com/June-Bajim/June",
  // },
  {
    title: "Nyeri Online Filming Site",
    description: "This collaborative project was developed to assist filmmakers and content creators in discovering and reserving ideal shooting locations. The platform allows users to browse, view details, and book filming sites through a user-friendly interface. Designed with both functionality and accessibility in mind, the system simplifies the process of site selection and booking.",
    // link: "/projects/mechatronics-lab",
  },
  {
    title: "Expense Tracker",
    description: "This is a user-friendly web application designed to help individuals track their income and expenses, promoting better financial management. Users can log daily transactions, categorize spending, and monitor their balance over time through a clean and intuitive dashboard.",
    link: "https://github.com/June-Bajim/expenses-tracker",
  },

  {
    title: "Social Media Dahboard",
    description: "This is a full-stack web application developed using Next.js for the frontend and Node.js for the backend, designed to track and visualize the latest technology trends across major social media platforms. The dashboard aggregates and displays real-time data, offering users a centralized view of trending topics in the tech industry.",
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
