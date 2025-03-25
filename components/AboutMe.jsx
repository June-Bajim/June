import React from "react";
import { Shield, Cpu, Monitor, Code } from "lucide-react";

const SkillBadge = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-4 w-24 text-blue-800">
    {icon}
    <span className="text-sm font-medium text-blue-800">{label}</span>
  </div>
);

const AboutMe = () => {
  const skills = [
    { icon: <Monitor size={14} />, label: "Web Dev" },
    { icon: <Code size={14} />, label: "Front-End" },
    { icon: <Shield size={14} />, label: "Cybersecurity" },
    { icon: <Cpu size={14} />, label: "Machine Learning" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center font-patrick mb-6">About Me</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left side - Image Section */}
        <div className="w-full md:w-1/2 px-4">
          <img
            src="/june.jpg"
            alt="About Me"
            className="w-full max-h-60 sm:max-h-72 object-cover rounded-lg"
          />
        </div>

        {/* Right side - Skills and Additional Content */}
        <div className="w-full md:w-1/2 px-4 text-center md:text-left">
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
            I am a software developer with a passion for building web applications and solving real-world problems.
            Proficient in front-end development using React, Next.js, and Tailwind CSS, as well as back-end development
            with Node.js, Express, and PostgreSQL. I also have intermediate skills in cybersecurity and machine learning.
          </p>

          {/* Skills */}
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-5 sm:gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
