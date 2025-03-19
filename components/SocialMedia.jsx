import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/june-Bajim",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/june-rotich-8b1699238/",
      label: "LinkedIn Profile",
    },
    {
      icon: Twitter,
      href: "https://x.com/JUN3E3",
      label: "Twitter Profile",
    },
    {
      icon: Mail,
      href: "mailto:junekrotich@gmail.com",
      label: "Email Me",
    },
  ];

  return (
    <div style={{ writingMode: "vertical-rl" }} className="flex gap-8">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-blue hover:text-white transition-colors duration-300"
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
