import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Logout from "./Logout";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex items-center bg-gray-950 justify-between">
      <div className="bg-gray-950 px-8 py-6 shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="text-white font-bold text-lg">Webnovel</div>
          </div>
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="flex items-center text-yellow-50 font-semibold focus:outline-none hover:text-yellow-300 transition duration-200"
            >
              Links <FaChevronDown className="ml-1" />
            </button>
            {showDropdown && (
              <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1BQq5-jk5ZvfcqK910-ZJHr62KPczCGH31tvKkzdPMUo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-200"
                  >
                    AST Feedback Recording
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc_K9TXOS8xedMtW-vx6SjGi7uon5aSmnYDX5SYAY-ltHXX7A/viewform?pli=1&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-200"
                  >
                    Check-in Recording
                  </a>
                  <a
                    href="https://activity.webnovel.com/noah/844556559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-200"
                  >
                    Author Benefits
                  </a>
                  <a
                    href="https://activity.webnovel.com/noah/287439652"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition duration-200"
                  >
                    Content Creation Guideline
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            className="text-yellow-500 font-bold text-lg"
            href="https://docs.google.com/spreadsheets/d/1BQq5-jk5ZvfcqK910-ZJHr62KPczCGH31tvKkzdPMUo/edit?gid=876745341#gid=876745341"
            target = "_blank"
          >
            AST Feedback Recording
          </a>
        </div>
        <div className="flex items-center space-x-6"></div>
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
