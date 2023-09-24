const mongoose = require('mongoose');

const Maintenance = mongoose.Schema({
  taxation: { type: Number, required: true },
  propertyMaintenance: { type: Number, required: true },
});


const Assets = mongoose.Schema({
  assetName: { type: String, required: true },
  assetType: { type: String, required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  purchaseDate: { type: Date, required: true },
  purchaseCost: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  maintenance: Maintenance
}, {
  timestamps: true
});

module.exports = mongoose.model('Assets', Assets);
