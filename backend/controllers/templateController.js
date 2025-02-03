import Template from "../models/TemplateModel.js";
import mongoose from "mongoose";

//create template
export const createTemplate = async (req, res) => {
  const { question, answer, category } = req.body;

  if (!question || !answer || !category) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }

  try {
    const template = await Template.create({ question, answer, category });
    res.status(200).json(template);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get template
export const getTemplate = async (req, res) => {
  const { id } = req.params;
  const templates = await Template.findOne({ _id: id });
  res.status(200).json(templates);
};

//get alltemplate
export const getAllTemplate = async (req, res) => {
  const templates = await Template.find({}).sort({ createdAt: -1 });
  res.status(200).json(templates);
};

//delete template
export const deleteTemplate = async (req, res) => {
  const { id } = req.params;

  try {
    const template = await Template.findByIdAndDelete(id);

    if (!template) {
      return res.status(400).json({ error: "Template not found" }); // Use .json() to send structured data
    }

    // Respond with success message
    return res.status(200).json({ message: "Deleted successfully", template }); // Use .json() consistently
  } catch (error) {
    // Handle unexpected errors
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the template" });
  }
};

//delete all
export const deleteAllTemplate = async (req, res) => {
  try {
    const result = await Template.deleteMany({});
    console.log(`Deleted ${result.deletedCount} templates.`);

    // Send a success response if deletion is successful
    res.status(200).json({
      message: `Successfully deleted ${result.deletedCount} templates.`,
    });
  } catch (error) {
    console.error("Error deleting templates:", error);

    // Send an error response with the appropriate status code
    res
      .status(500)
      .json({ message: "Failed to delete templates", error: error.message });
  }
}; 
 
//update
export const updateTemplate = async (req, res) => {
  const { id } = req.params;  
   
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such template" });
  } 
 
  const template = await Template.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true } // This ensures the updated document is returned
  );

  if (!template) {
    return res.status(400).json({ error: "No such template" });
  }

  res.status(200).json(template);
};
