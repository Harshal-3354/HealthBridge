const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
  videoCallUrl: { type: String, required: true }, // Twilio/WebRTC link
  recordingUrl: { type: String }, // If recording is enabled
  chatTranscript: [{ type: String }], // Optional
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Consultation", ConsultationSchema);
