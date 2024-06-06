const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  category: String,
  userId: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
