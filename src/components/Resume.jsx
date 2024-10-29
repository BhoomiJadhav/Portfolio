import React from "react";

const Resume = () => {
  const handleDownload = () => {
    window.open("/Bhoomi Jadhav-Resume.pdf", "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-900 text-white">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-2 text-center">
        <h1 className="text-4xl font-bold text-white">Bhoomi Jadhav</h1>
        <div className="text-gray-300">Frontend Web Developer</div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/bhoomi-jadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/BhoomiJadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
        <a
          href="/Resume.pdf"
          download
          className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Summary Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Summary</h2>
        <p className="text-gray-300">
          Passionate and innovative Frontend Web Developer with a strong
          foundation in HTML, CSS, and JavaScript, combined with proficiency in
          GSAP. Skilled in developing intuitive and visually appealing user
          interfaces to enhance user experience. Eager to leverage my technical
          expertise and creativity to contribute to your Firm.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">
              Bachelor of Technology in Computer
            </h3>
            <p className="text-gray-300">
              Mumbai University, Mumbai | CGPA: 7.9 | 2022-2026
            </p>
          </li>
          <li className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">12th Standard HSC</h3>
            <p className="text-gray-300">
              CHM College, Ulhasnagar | 64.17% | 2021-2022
            </p>
          </li>
          <li className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">10th Standard SSC</h3>
            <p className="text-gray-300">
              SAKV School, Ambernath | 92.80% | 2019-2020
            </p>
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <h3 className="font-bold text-white">Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Tailwind, Bootstrap, GSAP</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Backend (Basic)</h3>
            <p>MongoDB, Node.js, Express.js</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Platforms</h3>
            <p>Git, GitHub, Visual Studio Code</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Languages</h3>
            <p>Familiar with Java, C</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-green-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-300">
              Showcasing skills and projects with a clean and responsive design
              using HTML and CSS. Enhancing user experience through animations
              with JavaScript and GSAP.
            </p>
          </li>
          <li className="p-4 border-l-4 border-green-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">DevTube</h3>
            <p className="text-gray-300">
              Developed a dynamic video-sharing platform with features like
              channel creation, video uploads, and live updates using EJS, CSS,
              and JavaScript. Integrated Google OAuth, MongoDB, and Bunny
              Stream.
            </p>
          </li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Certifications
        </h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-purple-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">Advanced Java</h3>
            <p className="text-gray-300">Udemy</p>
          </li>
          <li className="p-4 border-l-4 border-purple-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">Prompt Engineering</h3>
            <p className="text-gray-300">Udemy</p>
          </li>
          <li className="p-4 border-l-4 border-purple-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">Introduction to AI</h3>
            <p className="text-gray-300">IBM</p>
          </li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Achievements</h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-yellow-500 bg-gray-800 rounded shadow">
            <p className="text-gray-300">
              Cleared round 1 of a nationwide frontend competition with over 650
              teams competing by Shreyians Coding School.
            </p>
          </li>
        </ul>
      </section>

      {/* Position of Responsibility Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Position of Responsibility
        </h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-red-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">
              Member | Katalyst Organisation
            </h3>
            <p className="text-gray-300">
              Mumbai Branch (2023-Present) - Empowering women through education,
              professional development, and leadership training.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
