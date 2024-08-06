import express from 'express';
import { uploadFile, getFilesForClass, downloadFile, deleteFile } from '../controllers/files.controller.js';

const router = express.Router();

router.post('/upload', uploadFile); // Endpoint to upload a file
router.get('/class/:classId', getFilesForClass); // Endpoint to get all files for a class
router.get('/:id/download', downloadFile); // Endpoint to download a file by ID
router.delete('/:id', deleteFile); // Endpoint to delete a file by ID

export default router;
