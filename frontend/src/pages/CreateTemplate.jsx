import React, { useState, useContext } from "react";
import { CategoriesContext } from "../hooks/CategoriesContext";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const CreateTemplate = () => {
  const { categories, setCategories, fetchCategories } = useContext(CategoriesContext);
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { enqueueSnackbar } = useSnackbar(); // For notifications
  const navigate = useNavigate(); // Use navigate instead of Navigate component

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalCategory = category === "custom" ? customCategory : category;

    // Input validation
    if (!finalCategory || !question || !answer) {
      enqueueSnackbar("Please fill in all the fields.", { variant: "error" });
      return;
    }

    const data = {
      question: question,
      answer: answer,
      category: finalCategory,
    };
    console.log(data);
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URLT, data);
      enqueueSnackbar("Entry created successfully!", { variant: "success" });
    
      // Update the categories state manually
      if (finalCategory && !categories.includes(finalCategory)) {
        setCategories((prevCategories) => [...prevCategories, finalCategory]);
      }
    
      await fetchCategories();
      navigate("/home");
    } catch (error) {
      console.error("Error submitting data:", error);
      enqueueSnackbar("Failed to create the entry. Please try again.", {
        variant: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
    <BackButton/>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-sans font-bold text-gray-800 mb-8 text-center">
          Create New Entry
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-lg rounded-lg"
        >
          {/* Category Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
              <option value="custom">Other (Please specify)</option>
            </select>
          </div>

          {/* Custom Category Field */}
          {category === "custom" && (
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Custom Category
              </label>
              <input
                type="text"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                required
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {/* Question Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Question
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Answer Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Answer
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium text-lg leading-tight rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTemplate;
