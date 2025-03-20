import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaFlask } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML", level: 89 },  
  { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS", level: 85 },     
  { icon: <FaJsSquare className="text-[#F7DF1E]" />, name: "JavaScript", level: 72 }, 
  { icon: <FaReact className="text-[#61DBFB]" />, name: "React.js", level: 75 },     
  { icon: <SiNextdotjs className="text-black" />, name: "Next.js", level: 65 },      
  { icon: <FaNodeJs className="text-[#68A063]" />, name: "Node.js", level: 57 },     
  { icon: <FaPython className="text-[#306998]" />, name: "Python", level: 63 },      
  { icon: <FaDatabase className="text-[#6DB33F]" />, name: "Database", level: 70 },   
  { icon: <SiTailwindcss className="text-[#38B2AC]" />, name: "TailwindCSS", level: 80 },
  { icon: <FaJava className="text-[#007396]" />, name: "Java", level: 20 }, 
  { icon: <FaFlask className="text-[#000000]" />, name: "Flask", level: 35 },
  { icon: <FaPython className="text-[#306998]" />, name: "Machine Learning", level: 48 },
];

const Skills = () => {
  const midIndex = Math.ceil(skills.length / 2);
  const firstColumn = skills.slice(0, midIndex);
  const secondColumn = skills.slice(midIndex);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center font-patrick text-white">
        My Skills
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-x-16 md:gap-x-28 mb-8">
        {[firstColumn, secondColumn].map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col space-y-6">
            {column.map((skill, index) => (
              <div key={index} className="flex items-center">
                {/* Icon + Label */}
                <div className="flex flex-col items-center">
                  <div className="w-12 md:w-16 lg:w-20 h-12 flex items-center justify-center bg-white rounded-md shadow-md">
                    <div className="text-2xl md:text-3xl">{skill.icon}</div>
                  </div>
                  <span className="mt-2 text-center text-xs sm:text-sm md:text-base font-patrick text-white">
                    {skill.name}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="ml-6" style={{ width: "60px", height: "60px" }}>
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      pathColor: "#008000",
                      textColor: "#ffffff",
                      trailColor: "#d6d6d6",
                      strokeWidth: 6,
                    })}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
