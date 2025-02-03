import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <Link to="/templates/create">
      <button
        className="flex items-center  bg-blue-800 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mr-2"
        aria-label="Create New Template"
      >
        <HiOutlinePlusCircle className="text-2xl mr-2" />
        <span className=" text-sm font-semibold">Create New Template</span>
      </button>
    </Link>
  );
};

export default CreateButton;
