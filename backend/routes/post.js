const model = require("../mongo/post");
const express = require("express");
const post = model.post;
const router = express.Router();
// const Category = require('../models/Category')

router.post("/showpost", async (req, res) => {
  try {
    const fetched_data = await post.find();
    console.log("om");
    console.log(fetched_data);
    res.send(fetched_data);
  } catch (error) {
    console.log(error.message);
    res.send("server error");
  }
});

router.post("/addpost", async (req, res) => {
  //   const {} = req.body;
  const {  company_name,
    description,
    location,
    department,
    CTC,
    role,
    link,
    vacancy,
    stipend,
    eligibility, 
    last_date
} = req.body;
  let success = false;
  try {
    // let user = await User.findOne({ email: email });
    const post1 = new post({
      company_name,
      description,
      location,
      department,
      CTC,
      role,
      link,
      vacancy,
      stipend,
      eligibility,
      last_date
    });

    const doc = await post1.save();
    console.log(doc);
    success = true;
    res.json({
      message: "Post created succesfully...",
      success: success,
    });
  } catch (err) {
    success = false;
    res.send(err);
  }
});

exports.router = router;