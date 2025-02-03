import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const CategoriesContext = createContext();

// Create a provider component
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    "Payment",
    "Contract",
    "Bugs",
    "Inkstone",
    "Webnovel App",
  ]);

  // Fetch categories function
  const fetchCategories = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URLT, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Name: localStorage.getItem("name"),
        },
      });
      const fetchedCategories = response.data.map((x) => x.category);

      // Merge fetched categories with defaults and ensure uniqueness
      setCategories((prevCategories) => [
        ...new Set([...prevCategories, ...fetchedCategories]),
      ]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Initial fetch when the component is mounted
  useEffect(() => {
    fetchCategories();
  }, []); // Run once on component mount

  return (
    <CategoriesContext.Provider
      value={{ categories, setCategories, fetchCategories }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
