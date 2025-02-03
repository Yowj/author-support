import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";


const EditButton = ({ text }) => {
  return (
    <Link to={`/templates/edit/${text}`}>
      <button className="flex items-center rounded-lg  text-yellow-500 p-2 pt-0 pb-0 mt-5 text-3xl">
        <FaRegEdit />
      </button>
    </Link>
  );
};

export default EditButton;
