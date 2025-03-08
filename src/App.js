import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileCard from "./components/Profile_card";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import "./components/CSS/Slick.css";
import "./components/CSS/bootstrap.min.css";

function App() {
    return (
            <div className="page-content min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 p-6 text-white">
              <Navbar />
              {/* <ProfileCard /> */}
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Resume" element={<Resume />} />
                        <Route path="/Projects" element={<Projects />} />
                        <Route path="/About-Me" element={<AboutMe />} />
                        <Route path="/Contact-Me" element={<ContactMe />} />
                        <Route path="/Blog" element={<Blog />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </AnimatePresence>
            </div>
    );
}

export default App;
