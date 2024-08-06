import { Router } from 'express';
import { createClass, getAllClasses, getClassById, updateClass, deleteClass } from '../controllers/class.controller.js';


const router = Router();
// Create a new class
router.post('/', createClass);

// Get all classes
router.get('/', getAllClasses);

// Get a class by ID
router.get('/:id', getClassById);

// Update a class
router.put('/:id', updateClass);

// Delete a class
router.delete('/:id', deleteClass);

export default router;
