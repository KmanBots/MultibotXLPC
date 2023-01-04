const mongoose = require('mongoose');

const osrsPlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  combatLevel: {
    type: Number,
    required: true
  }
});

const OsrsPlayer = mongoose.model('OsrsPlayer', osrsPlayerSchema);

module.exports = { OsrsPlayer }
