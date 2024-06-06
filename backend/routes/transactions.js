const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions for a user
router.get('/:userId', async (req, res) => {
  const transactions = await Transaction.find({ userId: req.params.userId });
  res.json(transactions);
});

// Add a transaction
router.post('/add', async (req, res) => {
  const newTransaction = new Transaction(req.body);
  await newTransaction.save();
  res.json(newTransaction);
});

module.exports = router;
