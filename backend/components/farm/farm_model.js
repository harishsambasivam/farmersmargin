const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
  farmid: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [10, "Field ID must be less than 10 characters long"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
    formattedAddress: String,
  },
  username: {
    type: String,
    unique: true,
    maxlength: [16, "Username must be less than 16 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  globalVisibility: {
    type: Boolean,
    default: false,
  },
});

FarmSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Farms", FarmSchema);
