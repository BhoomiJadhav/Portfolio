import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const pdfUrl = "/Bhoomi Jadhav-Resume.pdf"; // must be inside public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Bhoomi-Jadhav-Resume.pdf";
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-900 text-white rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-3 text-center">
        <h1 className="text-4xl font-bold text-white">Bhoomi Jadhav</h1>

        <div className="text-gray-300">
          Final-year Computer Engineering Student
        </div>

        <div className="text-gray-400">
          +91 84591 20609 | bhoomijadhav706@gmail.com
        </div>

        {/* Download Resume Button */}
        <button
          onClick={handleDownload}
          className="mt-2 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all shadow-md"
        >
          Download Resume
        </button>

        {/* Social Links */}
        <div className="flex space-x-4 pt-2">
          <a
            href="https://www.linkedin.com/in/bhoomi-jadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/BhoomiJadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Summary Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Summary</h2>
        <p className="text-gray-300">
          Final-year Computer Engineering student proficient in Java, the MERN
          stack, and foundational Data Structures & Algorithms. Passionate about
          building interactive web applications and continuously learning
          through hands-on projects, coding challenges, and hackathons. Actively
          seeking software engineering opportunities to solve real-world
          problems and grow as a developer in a dynamic tech environment.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">
              Bachelor of Engineering in Computer
            </h3>
            <p className="text-gray-300">
              Mumbai University, Mumbai | CGPA: 8.0 | 2022–2026
            </p>
          </li>
          <li className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">12th Standard HSC</h3>
            <p className="text-gray-300">
              CHM College, Ulhasnagar | 64.17% | 2021–2022
            </p>
          </li>
          <li className="p-4 border-l-4 border-blue-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">10th Standard SSC</h3>
            <p className="text-gray-300">
              SAKV School, Ambernath | 92.80% | 2019–2020
            </p>
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Skills Summary
        </h2>
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <h3 className="font-bold text-white">Languages</h3>
            <p>Core Java, HTML, CSS</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Frameworks / Libraries</h3>
            <p>React, Node.js, Express.js</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Database</h3>
            <p>MongoDB, MySQL</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Tools & Other</h3>
            <p>
              Git, GitHub, REST APIs, VS Code, IntelliJ IDEA, LeetCode,
              HackerEarth
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">CS Fundamentals</h3>
            <p>
              OOPs, Foundational DSA (Arrays, Strings, Stack, Searching &
              Sorting Algorithms)
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-green-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">InterviewAI</h3>
            <p className="text-gray-300">
              AI-powered mock interview platform using OpenAI and Gemini API...
            </p>
            <p className="text-blue-400">
              GitHub:{" "}
              <a
                href="https://github.com/BhoomiJadhav/InterviewAI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/BhoomiJadhav/InterviewAI
              </a>
            </p>
          </li>

          <li className="p-4 border-l-4 border-green-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">DevTube</h3>
            <p className="text-gray-300">
              Developer-centric video sharing platform built with MERN &
              Socket.io...
            </p>
            <p className="text-blue-400">
              GitHub:{" "}
              <a
                href="https://github.com/BhoomiJadhav/DevTube.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/BhoomiJadhav/DevTube
              </a>
            </p>
          </li>

          <li className="p-4 border-l-4 border-green-500 bg-gray-800 rounded shadow">
            <h3 className="text-lg font-bold text-white">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-300">
              React + Tailwind portfolio with responsive design...
            </p>
            <p className="text-blue-400">
              Live:{" "}
              <a
                href="https://bhoomijadhav.github.io/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                bhoomijadhav.github.io/Portfolio
              </a>
            </p>
          </li>
        </ul>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Achievements & Certifications
        </h2>
        <ul className="space-y-4">
          <li className="p-4 border-l-4 border-yellow-500 bg-gray-800 rounded shadow">
            <p className="text-gray-300">
              Edunet Virtual Internship (Full-Stack Development)
            </p>
          </li>
          <li className="p-4 border-l-4 border-yellow-500 bg-gray-800 rounded shadow">
            <p className="text-gray-300">
              Participated in major hackathons (WWT, Quasar, Technathon)
            </p>
          </li>
          <li className="p-4 border-l-4 border-yellow-500 bg-gray-800 rounded shadow">
            <p className="text-gray-300">
              Certified in Prompt Engineering (Udemy)
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
