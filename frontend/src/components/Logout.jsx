import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <Link to="/">
      <button
        className="flex items-center px-5 py-3 rounded-md shadow-md bg-yellow-600 mr-4 text-sm font-semibold"
        aria-label="Create New Template"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("name");
        }}
      >
        Logout
      </button>
    </Link>
  );
};

export default Logout;
