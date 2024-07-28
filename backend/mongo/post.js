const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  company_name: { type: String, required: true },
  description: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  CTC: { type: String, required: true },
  role: { type: String, required: true },
  link: { type: String, required: true },
  vacancy: { type: String, required: true },
  stipend: { type: String, required: true },
  eligibility: { type: String, required: true },
  last_date: { type: String, required: true },
});

exports.post = mongoose.model("post", postSchema);