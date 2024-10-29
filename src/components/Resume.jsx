import React from "react";

const Resume = () => {
  const resumeURL = "/Resume.pdf"; // Place the PDF directly in the public folder

  return (
    <div className="bg-gray-900 text-white p-8">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">My Resume</h2>

        <div className="mb-8">
          <iframe
            src={resumeURL}
            className="w-full h-[600px] rounded-lg shadow-lg mb-4"
            title="My Resume"
          ></iframe>
        </div>

        <a
          href={resumeURL}
          download
          className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default Resume;
