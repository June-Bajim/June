"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "../../components/ParticlesBackground";
import SocialMedia from "../../components/SocialMedia";
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const LandingPage = () => {
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
                  <div className="text-2xl font-patrick font-bold text-blue pl-0"></div>
                  <div className="hidden md:flex space-x-16 px-10">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className="bg-gray hover:text-white transition-colors font-patrick font-bold"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center mx-auto">
              <div className="max-w-7xl mx-auto px-2 sm:px-4 mr-10 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Left Section - Text Content */}
                  <div className="space-y-4 text-center md:text-left">
                    <div className="bg-gray tracking-wider font-patrick text-xl">
                      Hello, I&apos;m
                    </div>
                    <h1 className="text-5xl md:text-6xl font-patrick tracking-loose">
                      June <br /> Jebiwott,
                    </h1>
                    <h2 className="text-3xl md:text-2xl font-patrick leading-tight font-courier">
                      I&apos;m a{" "}
                      <span className="text-green-600">Software Developer</span>
                      <span className="text-white">.</span>
                    </h2>

                    {/* Buttons */}
                    <div className="flex space-x-4 pt-2">
                      {/* <button className="border-2 border-blue px-6 py-3 rounded hover:bg-blue hover:text-white transition-colors font-patrick font-bold">
                        Talk to me
                      </button> */}
                      <a href="/CV.docx">
                      <button className="border-2 border-blue px-6 py-3 rounded hover:bg-blue hover:text-white transition-colors font-patrick font-bold">
                        Download CV
                      </button>
                      </a>
                    </div>
                  </div>

                  {/* Center Section - Image */}
                  <div className="flex justify-center">
                    <div className="w-[80%] aspect-square bg-gray-200 rounded-full overflow-hidden">
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
                  <div className="flex flex-col-4 justify-center md:justify-center ">
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
