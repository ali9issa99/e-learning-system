import express from 'express';
import { applyWithdrawal, getAllWithdrawals, getWithdrawalsForClass, updateWithdrawalStatus } from '../controllers/withdrawals.controller.js';

const router = express.Router();

router.post('/apply', applyWithdrawal); // Endpoint to apply for withdrawal
router.get('/', getAllWithdrawals); // Endpoint to get all withdrawal requests
router.get('/class/:classId', getWithdrawalsForClass); // Endpoint to get withdrawals for a specific class
router.patch('/:id/status', updateWithdrawalStatus); // Endpoint to update withdrawal status

export default router;
