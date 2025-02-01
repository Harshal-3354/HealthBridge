const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["patient", "doctor", "admin"], required: true },
  phone: { type: String },
  specialization: { type: String }, // Only for doctors
  experience: { type: Number }, // Only for doctors
  availability: [{ day: String, slots: [String] }], // Doctor's available time slots
  medicalHistory: [{ type: String }], // Only for patients
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
