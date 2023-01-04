import mongoose from 'mongoose';

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

export const OsrsPlayer = mongoose.model('OsrsPlayer', osrsPlayerSchema);

