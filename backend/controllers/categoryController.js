import Category from "../models/CategoryModel.js";
import mongoose from "mongoose";

//get all categories
export const getAllCategories = async (req, res) => {
  const categories = await Category.find({});

  if (!categories) {
    return Error("No categories found");
  }

  res.status(200).json(categories);
  console.log("Succesfully fetched categories from categoryController.js")
};

//create a category

export const createCategories = async (req, res) => {
  const { category } = req.body;

  if (!category) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }

  try {
    const categoryCreated = await Category.create({ category });
    res.status(200).json({categoryCreated, Msg: "Succesful created"});
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while creating the template" });
  }
};
