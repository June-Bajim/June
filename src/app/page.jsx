"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "../../components/ParticlesBackground";
import SocialMedia from "../../components/SocialMedia";
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About Me", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <>
      <ParticlesBackground>
        <div className="flex justify-center items-center mx-auto">
          <div className="h w-full">
            {/* Navigation */}
            <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
              <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="text-2xl font-patrick font-bold text-blue"></div>

                  {/* Hamburger Menu */}
                  <div className="md:hidden">
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="text-white focus:outline-none"
                    >
                      ☰
                    </button>
                  </div>

                  {/* Navigation Items */}
                  <div
                    className={`absolute md:relative top-16 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ${
                      menuOpen ? "block" : "hidden md:flex"
                    }`}
                  >
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className="block md:inline-block text-white py-2 px-4 md:px-6 hover:text-blue transition-colors font-patrick font-bold"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Hero Section */}
            <div className="relative min-h-screen flex flex-col md:flex-row items-center text-center md:text-left mx-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Left Section - Text Content */}
                  <div className="space-y-4">
                    <div className="bg-gray tracking-wider font-patrick text-xl">
                      Hello, I&apos;m
                    </div>
                    <h1 className="text-4xl md:text-6xl font-patrick tracking-loose">
                      June <br /> Jebiwott,
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-patrick leading-tight font-courier">
                      I&apos;m a{" "}
                      <span className="text-green-600">Software Developer</span>
                      <span className="text-white">.</span>
                    </h2>

                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start space-x-4 pt-2">
                      <a href="/CV.docx">
                        <button className="border-2 border-blue px-6 py-3 rounded hover:bg-blue hover:text-white transition-colors font-patrick font-bold">
                          Download CV
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Center Section - Image */}
                  <div className="flex justify-center">
                    <div className="w-60 md:w-80 aspect-square bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src="/june.jpg"
                        alt="Professional portrait"
                        className="w-full h-full object-cover"
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>

                  {/* Right Section - Social Media */}
                  <div className="flex justify-center md:justify-start">
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections with IDs */}
        <div id="about">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </ParticlesBackground>
    </>
  );
};

export default LandingPage;
