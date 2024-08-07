import express from 'express';
import { applyWithdrawal, getAllWithdrawals, getWithdrawalsForClass, updateWithdrawalStatus } from '../controllers/withdrawals.controller.js';

const router = express.Router();

router.post('/apply', applyWithdrawal); 
router.get('/', getAllWithdrawals); 
router.get('/class/:classId', getWithdrawalsForClass); 
router.patch('/:id/status', updateWithdrawalStatus); 

export default router;
