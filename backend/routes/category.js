import express from "express"
import { getAllCategories, createCategories } from "../controllers/categoryController.js";

const router = express.Router();


router.get("/", getAllCategories)


router.post("/", createCategories)

export default router