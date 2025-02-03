import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CategoriesContext } from "../hooks/CategoriesContext";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const EditTemplate = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { categories, setCategories } = useContext(CategoriesContext);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URLT}/${id}`)
        .then((response) => {
          const data = response.data;
          setCategory(data.category);
          setQuestion(data.question);
          setAnswer(data.answer);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const newData = {
    category: category,
    question: question,
    answer: answer,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${import.meta.env.VITE_BACKEND_URLT}/${id}`, newData);
      // Navigate after successful update
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
    <BackButton />
      <h1 className="text-3xl font-bold text-center mb-6">Edit Template</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <div>
            <label
              htmlFor="category"
              className="block text-lg font-semibold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Question Input */}
        <div>
          <label
            htmlFor="question"
            className="block text-lg font-semibold mb-2"
          >
            Question
          </label>
          <input
            type="text"
            id="question"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question here"
          />
        </div>

        {/* Answer Input */}
        <div>
          <label htmlFor="answer" className="block text-lg font-semibold mb-2">
            Answer
          </label>
          <textarea
            id="answer"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows="4"
            placeholder="Enter the answer here"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTemplate;
