const mongoose = require("mongoose");

const ChatbotMessageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true }, // User's message
  botResponse: { type: String, required: true }, // Chatbot's reply
  intent: { type: String }, // AI intent (e.g., "symptom_check", "medication_advice")
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ChatbotMessage", ChatbotMessageSchema);
