import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { FaCopy } from "react-icons/fa";

const CopyButton = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        enqueueSnackbar("Text Copied", { variant: "success" });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        enqueueSnackbar("Error par", { variant: "error" });
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="pl-2 pr-2 rounded-md p-2 pt-0 pb-0 mt-5 text-2xl"
    >
      <FaCopy />
    </button>
  );
};

export default CopyButton;
