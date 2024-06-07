const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Create a new transaction
router.post('/', async (req, res) => {
  const newTransaction = new Transaction(req.body);
  try {
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a transaction
router.put('/:id', async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTransaction);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a transaction
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json("Transaction deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
