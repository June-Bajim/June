import React from "react";
import Image from "next/image";

const StatItem = ({ icon, count, label }) => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="mb-2">{icon}</div>
    <div className="text-xl font-medium text-white">{count}</div>
    <div className="text-sm text-gray-300 text-center">{label}</div>
  </div>
);

const StatisticsSection = () => {
  const stats = [
    {
      icon: (
        <Image
          src="/projects.png"
          alt="Custom Icon"
          width={24}
          height={24}
          className="text-green-500"
        />
      ),
      count: "750+",
      label: "Projects Complete",
    },

    {
      icon: (
        <Image
          src="/projects.png"
          alt="Custom Icon"
          width={24}
          height={24}
          className="text-green-500"
        />
      ),
      count: "568+",
      label: "Happy Clients",
    },
    {
      icon: (
        <Image
          src="/projects.png"
          alt="Custom Icon"
          width={24}
          height={24}
          className="text-green-500"
        />
      ),
      count: "478+",
      label: "Cups of Coffee",
    },
    {
      icon: (
        <Image
          src="/projects.png"
          alt="Custom Icon"
          width={24}
          height={24}
          className="text-green-500"
        />
      ),
      count: "780+",
      label: "Years Experienced",
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            count={stat.count}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
