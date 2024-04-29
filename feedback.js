const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ajayparappallil:ajay@cluster0.glke4um.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected for feedback");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  message: String
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;