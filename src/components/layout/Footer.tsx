"use client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    href: "mailto:kwakrhkr59@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://github.com/kwakrhkr59",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/hyeonjeong-kwak",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-5 text-xl mb-4">
          {contactLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} Hyeonjeong Kwak. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
