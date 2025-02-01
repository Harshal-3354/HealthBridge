const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Optional
  reportFileUrl: { type: String, required: true }, // File stored in Cloudinary/AWS S3
  extractedText: { type: String }, // OCR extracted text
  summary: { type: String }, // AI-generated summary
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", ReportSchema);
