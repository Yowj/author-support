import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CategoriesContext } from "../hooks/CategoriesContext";
import CreateButton from "../components/CreateButton";
import Header from "../components/Header";
import FAQItem from "../components/FAQItem";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [templates, setTemplates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { categories } = useContext(CategoriesContext);

  // Fetch All Templates
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URLT, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Name: localStorage.getItem("name"),
          },
        });
        setTemplates(response.data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };
    fetchTemplates();
  }, []);

  // Filters templates by category (if any) and then by the searchTerm
  const displayedTemplates = (
    currentCategory
      ? templates.filter((t) => t.category === currentCategory)
      : templates
  ).filter(
    (t) =>
      t.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setSearchTerm(""); // Clear the search when switching categories (optional)
  };

  const handleShowAllClick = () => {
    setCurrentCategory("");
    setSearchTerm(""); // Optional: clear search when showing all
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex">
        {/* Sidebar */}
        <div className="w-1/6 bg-gray-800 shadow-md p-4">
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
            onClick={handleShowAllClick}
          >
            Show All Templates
          </button>
          <h2 className="w-full text-center text-xl font-bold mb-2 mt-3 border-b border-white text-yellow-300">Categories</h2>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {categories.map((category, index) => (
              <button
                className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-300"
                key={index}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Show All Templates Button */}
        </div>

        {/* Content */}
        <div className="w-3/4 p-6 text-gray-300">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search templates..."
              className="px-4 py-2 rounded-md w-1/2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {currentCategory ? (
            <h4 className="text-xl font-bold mb-4 text-white">
              {currentCategory}
            </h4>
          ) : (
            <h4 className="text-xl font-bold mb-4 text-white">All Templates</h4>
          )}

          {displayedTemplates.length > 0 ? (
            displayedTemplates.map((item) => (
              <FAQItem
                key={item._id}
                question={item.question}
                answer={item.answer}
                id={item._id}
              />
            ))
          ) : (
            <h4 className="text-xl font-bold mb-4 text-white">
              No Templates Found
            </h4>
          )}
        </div>

        {/* Create Button */}
        <CreateButton />
      </div>
    </>
  );
};

export default Home;
