// import React from "react";
// import { FaLaptopCode, FaBook, FaPlane, FaCode } from "react-icons/fa";
// import Aicte from "../assets/aicte.png";
// import Prompt from "../assets/prompt.png";
// import Reimagine from "../assets/reimagine.png";

// const Certifications = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (imageSrc) => {
//     setSelectedImage(imageSrc);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };
// };

// const About = () => {
//   return (
//     <div className="bg-gray-900 text-white p-8">
//       <section className="max-w-3xl mx-auto mb-12">
//         <h2 className="text-3xl font-bold mb-4 text-yellow-400">About Me</h2>
//         <p className="text-gray-300 mb-4">
//           I am a Computer Engineering Student of Third Year in Mumbai
//           University. Passionate about technology and problem-solving, I’m eager
//           to start my career in web development and software engineering.
//           Equipped with a foundational knowledge in front-end and back-end
//           technologies, I am ready to build solutions that are both functional
//           and aesthetically pleasing.
//         </p>
//         <p className="text-gray-300">
//           During my Second year, I completed several small projects, including a
//           E-library for Engineering Students, Blogging Website and a contract
//           farming platform named FarmLink. My technical skills cover web
//           development with MERN Stack ,some Basic DSA (Data Structures and
//           Algorithms), and more. I’m excited to apply my skills in a
//           professional setting and continue growing.
//         </p>
//       </section>

//       <hr className="border-gray mb-12" />

//       <section className="max-w-3xl mx-auto">
//         <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
//           What I'm Doing
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg p-4  border-l-2 border-l-lightGray">
//             <FaLaptopCode className="text-yellow-400 text-4xl mr-4 " />
//             <div>
//               <h4 className="text-xl font-semibold mb-1">Web Development</h4>
//               <p className="text-gray-400">
//                 Building responsive and interactive websites using modern
//                 frameworks and libraries.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg border-l-2 border-l-lightGray">
//             <FaCode className="text-yellow-400 text-3xl mr-4" />
//             <div>
//               <h4 className="text-xl font-semibold mb-1">
//                 Data Structures & Algorithms
//               </h4>
//               <p className="text-gray-400">
//                 Solving problems and optimizing code with efficient algorithms.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg border-l-2 border-l-lightGray">
//             <FaBook className="text-yellow-400 text-3xl mr-4" />
//             <div>
//               <h4 className="text-xl font-semibold mb-1">Reading</h4>
//               <p className="text-gray-400">
//                 Exploring books on tech, productivity, and personal growth.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg border-l-2 border-l-lightGray">
//             <FaPlane className="text-yellow-400 text-3xl mr-4" />
//             <div>
//               <h4 className="text-xl font-semibold mb-1">Traveling</h4>
//               <p className="text-gray-400">
//                 Discovering new cultures and perspectives around the world.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <hr className="border-gray mb-12 mt-10" />
//       {/* Certifications Section */}
//       <section className="max-w-3xl mx-auto">
//         <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
//           Certifications
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {/* Certification Card Example */}
//           <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
//             <img
//               src={Aicte}
//               alt="Generative AI Virtual Internship"
//               className="w-full h-32 object-cover mb-4 rounded cursor-pointer"
//               onClick={() => openModal(Aicte)}
//             />
//             <h4 className="text-lg font-semibold text-yellow-400">
//               Generative AI Virtual Internship
//             </h4>
//             <p className="text-gray-400">AICTE, EduSkill</p>
//           </div>

//           {/* Repeat for other certifications */}
//           <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
//             <img
//               src={Prompt}
//               alt="Prompt Engineering"
//               className="w-full h-32 object-cover mb-4 rounded cursor-pointer"
//               onClick={() => openModal(Prompt)}
//             />
//             <h4 className="text-lg font-semibold text-yellow-400">
//               Prompt Engineering
//             </h4>
//             <p className="text-gray-400">UDEMY</p>
//           </div>

//           <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
//             <img
//               src={Reimagine}
//               alt="REIMAGINE Hackathon"
//               className="w-full h-32 object-cover mb-4 rounded cursor-pointer"
//               onClick={() => openModal(Reimagine)}
//             />
//             <h4 className="text-lg font-semibold text-yellow-400">
//               REIMAGINE Hackathon
//             </h4>
//             <p className="text-gray-400">Shreyians Coding School</p>
//           </div>
//         </div>

//         {/* Modal */}
//         {selectedImage && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//             onClick={closeModal}
//           >
//             <div className="relative">
//               <img
//                 src={selectedImage}
//                 alt="Full Certification"
//                 className="w-auto max-h-screen rounded-lg"
//               />
//               <button
//                 className="absolute top-2 right-2 text-white text-xl"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default About;
import React, { useState } from "react";
import { FaLaptopCode, FaBook, FaPlane, FaCode } from "react-icons/fa";
import Aicte from "../assets/aicte.png";
import Prompt from "../assets/prompt.png";
import Reimagine from "../assets/reimagine.png";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      {/* About Me Section */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">About Me</h2>
        <p className="text-gray-300 mb-4">
          I am a Computer Engineering Student of Third Year in Mumbai
          University. Passionate about technology and problem-solving, I’m eager
          to start my career in web development and software engineering.
          Equipped with a foundational knowledge in front-end and back-end
          technologies, I am ready to build solutions that are both functional
          and aesthetically pleasing.
        </p>
        <p className="text-gray-300">
          During my Second year, I completed several small projects, including
          an E-library for Engineering Students, Blogging Website, and a
          contract farming platform named FarmLink. My technical skills cover
          web development with MERN Stack, basic DSA (Data Structures and
          Algorithms), and more. I’m excited to apply my skills in a
          professional setting and continue growing.
        </p>
      </section>

      <hr className="border-gray-700 mb-12" />

      {/* What I'm Doing Section */}
      <section className="max-w-3xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
          What I'm Doing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg border-l-2 border-gray-700">
            <FaLaptopCode className="text-yellow-400 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Web Development</h4>
              <p className="text-gray-400">
                Building responsive and interactive websites using modern
                frameworks and libraries.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg border-l-2 border-gray-700">
            <FaCode className="text-yellow-400 text-3xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">
                Data Structures & Algorithms
              </h4>
              <p className="text-gray-400">
                Solving problems and optimizing code with efficient algorithms.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg border-l-2 border-gray-700">
            <FaBook className="text-yellow-400 text-3xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Reading</h4>
              <p className="text-gray-400">
                Exploring books on tech, productivity, and personal growth.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg border-l-2 border-gray-700">
            <FaPlane className="text-yellow-400 text-3xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Traveling</h4>
              <p className="text-gray-400">
                Discovering new cultures and perspectives around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-700 mb-12" />

      {/* Certifications Section */}
      <section className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
            <img
              src={Aicte}
              alt="Generative AI Virtual Internship"
              className="w-full h-32 object-cover mb-4 rounded cursor-pointer"
              onClick={() => openModal(Aicte)}
            />
            <h4 className="text-lg font-semibold text-yellow-400">
              Generative AI Virtual Internship
            </h4>
            <p className="text-gray-400">AICTE, EduSkill</p>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
            <img
              src={Prompt}
              alt="Prompt Engineering"
              className="w-full h-32 object-cover mb-4 rounded cursor-pointer"
              onClick={() => openModal(Prompt)}
            />
            <h4 className="text-lg font-semibold text-yellow-400">
              Prompt Engineering
            </h4>
            <p className="text-gray-400">UDEMY</p>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4">
            <img
              src={Reimagine}
              alt="REIMAGINE Hackathon"
              className="w-full h-32 object-cover mb-4 rounded cursor-pointer"
              onClick={() => openModal(Reimagine)}
            />
            <h4 className="text-lg font-semibold text-yellow-400">
              REIMAGINE Hackathon
            </h4>
            <p className="text-gray-400">Shreyians Coding School</p>
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Full Certification"
                className="w-auto max-h-screen rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
