import React from "react";
import { Code, Shield, Cpu, Monitor } from "lucide-react";

const PersonalDetail = ({ label, value }) => (
  <div className="flex items-center gap-4 py-1 text-sm sm:text-base md:text-lg">
    <span className="font-medium text-gray-900 w-24 sm:w-32">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

const SkillBadge = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-gray-100 w-20 sm:w-24 text-blue-800">
    {icon}
    <span className="text-xs sm:text-sm font-medium">{label}</span>
  </div>
);

const AboutMe = () => {
  const details = [
    { label: "Name", value: "June Jebiwott" },
    { label: "Address", value: "Nakuru, Kenya" },
    { label: "Zip code", value: "1000" },
    { label: "Email", value: "junekrotich@gmail.com" },
    { label: "Phone", value: "+254 745 383 037" },
  ];

  const skills = [
    { icon: <Monitor size={24} className="sm:size-32" />, label: "Web Dev" },
    { icon: <Code size={24} className="sm:size-32" />, label: "Front-End" },
    { icon: <Shield size={24} className="sm:size-32" />, label: "Cybersecurity" },
    { icon: <Cpu size={24} className="sm:size-32" />, label: "Machine Learning" },
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
          <h2 className="text-lg sm:text-xl font-bold mb-4">Services</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} icon={skill.icon} label={skill.label} />
            ))}
          </div>

          {/* Personal Details */}
          {/* <div className="mt-4 space-y-2">
            {details.map((detail, index) => (
              <PersonalDetail key={index} label={detail.label} value={detail.value} />
            ))}
          </div> */}

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed">
            I am a software developer with a passion for building web applications and solving real-world problems.
            Proficient in front-end development using React, Next.js, and Tailwind CSS, as well as back-end development
            with Node.js, Express, and PostgreSQL. I am also interested in cybersecurity and machine learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
