const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
