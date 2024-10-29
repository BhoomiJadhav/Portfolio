import React from "react";

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "GSAP (Animations)", level: 70 },
  { name: "Node.js (Basic)", level: 60 },
  { name: "MongoDB (Basic)", level: 60 },
  { name: "Git ", level: 90 },
  { name: "Postman ", level: 60 },
];

const projects = [
  {
    name: "Personal Portfolio Website",
    description:
      "Showcasing skills and projects with a clean design using HTML, CSS, and GSAP animations.",
    link: "#",
  },
  {
    name: "DevTube",
    description:
      "A video-sharing platform with channel creation, video uploads, and real-time interactions.",
    link: "https://github.com/BhoomiJadhav/DevTube.git",
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Skills & Projects
        </h2>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Skills
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="w-1/4 font-medium">{skill.name}</span>
                <div className="w-3/4 bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="w-10 text-right">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-gray mb-12 mt-10" />
        {/* Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-yellow-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
