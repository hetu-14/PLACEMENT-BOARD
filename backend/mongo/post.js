const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  company_name: { type: String },
  description: { type: String },
  department: { type: String },
  location: { type: String },
  CTC: { type: String },
  role: { type: String },
  link: { type: String },
  vacancy: { type: String },
  stipend: { type: String },
  eligibility: { type: Number },
});

exports.post = mongoose.model("post", postSchema);
