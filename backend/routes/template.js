import express from "express"
import { createTemplate, getAllTemplate, getTemplate, deleteTemplate, updateTemplate, deleteAllTemplate } from "../controllers/templateController.js"
import { protect } from "../middleware/authMiddleware.js"
const router = express.Router()

// GET all workouts
router.get('/', protect, getAllTemplate )

//GET a single workout
router.get('/:id', getTemplate)

// POST a new workout
router.post('/', createTemplate)

//Delete all
router.delete('/deleteAll', deleteAllTemplate)

// DELETE a workout
router.delete('/:id', deleteTemplate)

// UPDATE a workout
router.patch('/:id', updateTemplate)


export default router;