// import Sidebar from "./components/Sidebar";
// import Maincontent from "./components/Maincontent";
// import Nav from "./components/Nav";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="w-screen h-screen overflow-scroll overflow-x-hidden bg-black z-[2] flex ">
//       <Sidebar />
//       <Maincontent className="ml-10" />
//       <Nav />
//       <Routes>
//         <Route path="/" element={<div>About Me</div>} />{" "}
//         <Route path="/resume" element={<div>Resume</div>} />
//         <Route path="/skills" element={<div>Skills</div>} />
//         <Route path="/contact" element={<div>Contact Me</div>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-black w-full min-h-screen overflow-x-hidden relative">
      <div className="w-full flex justify-center mt-10 mb-10">
        <div className="flex ">
          <Sidebar />
          <Maincontent />
        </div>
      </div>
    </div>
  );
}

export default App;
