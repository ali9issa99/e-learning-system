import express from 'express';
import { uploadFile, getFilesForClass, downloadFile, deleteFile } from '../controllers/files.controller.js';

const router = express.Router();

router.post('/upload', uploadFile); 
router.get('/class/:classId', getFilesForClass);
router.get('/:id/download', downloadFile); 
router.delete('/:id', deleteFile); 

export default router;
