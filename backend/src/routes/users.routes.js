import { Router } from 'express';
import { register, login, getProfile } from '../controllers/user.controller.js';
// import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

// Register a new user
router.post('/register', register);

// Login a user
router.post('/login', login);

// Get user profile
router.get('/profile',  getProfile);

export default router;
