import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white py-6 px-4 mt-auto border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-light text-black">
          © {currentYear} • Designed & Built by
          <span className="font-semibold text-primary"> Jonel Villaver</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Nelman25"
            target="_blank"
            className="text-black"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonel-villaver-70704a2b4/"
            target="_blank"
            className="text-[#0077B5]"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="mailto:jonelvillaver735@gmail.com"
            className="text-[#c71610]"
          >
            <CiMail className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
