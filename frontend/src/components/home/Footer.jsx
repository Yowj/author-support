import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-10 flex items-center justify-center space-x-4">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} RoyalTrust Bank
      </p>
      <span className="text-gray-300">|</span>
      <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
        Privacy Policy
      </a>
      <span className="text-gray-300">|</span>
      <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
        Terms of Service
      </a>
    </footer>
  );
};

export default Footer;
