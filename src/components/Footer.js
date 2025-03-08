import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-black bg-opacity-80 text-white py-4 mt-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>

        <ul className="flex space-x-4 mt-2 md:mt-0">
          <li>
            <Link to="/Resume" className="hover:text-gray-300 transition duration-200">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="hover:text-gray-300 transition duration-200">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/About-Me" className="hover:text-gray-300 transition duration-200">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/Contact-Me" className="hover:text-gray-300 transition duration-200">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
