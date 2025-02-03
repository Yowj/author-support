import React from "react";
import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import axios from "axios";
const DeleteButton = ({ text }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    try {
      axios
        .delete(`${import.meta.env.VITE_BACKEND_URLT}/${text}`)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/";
          setOpen(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        className="flex items-center text-red-500 rounded-lg p-2 pt-0 pb-0 mt-5 text-3xl"
        onClick={() => setOpen(true)}
      >
        <div>
          <RiDeleteBin2Fill />
        </div>
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="bg-white rounded-lg shadow-xl p-6 relative z-10 w-96">
            <p className="text-xl font-semibold mb-4 text-gray-800 flex justify-center">
              Are you sure?
            </p>
            <div className="flex justify-evenly space-x-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;
