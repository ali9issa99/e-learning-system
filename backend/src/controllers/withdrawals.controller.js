import Withdrawal from '../models/withdrawals.model.js';


export const applyWithdrawal = async (req, res) => {
  const { studentId, classId, reason } = req.body;

  try {
    const withdrawal = new Withdrawal({
      studentId,
      classId,
      reason
    });

    await withdrawal.save();

   

    res.status(201).json(withdrawal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllWithdrawals = async (req, res) => {
  try {
    const withdrawals = await Withdrawal.find()
      .populate('studentId', 'username email')
      .populate('classId', 'name');

    res.status(200).json(withdrawals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getWithdrawalsForClass = async (req, res) => {
  const { classId } = req.params;

  try {
    const withdrawals = await Withdrawal.find({ classId })
      .populate('studentId', 'username email')
      .populate('classId', 'name');

    res.status(200).json(withdrawals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateWithdrawalStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const withdrawal = await Withdrawal.findById(id);

    if (!withdrawal) {
      return res.status(404).json({ message: 'Withdrawal request not found' });
    }

    withdrawal.status = status;
    await withdrawal.save();

    res.status(200).json(withdrawal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
