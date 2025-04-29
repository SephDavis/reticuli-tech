// models/Technology.js
const mongoose = require('mongoose');

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('technology', TechnologySchema);