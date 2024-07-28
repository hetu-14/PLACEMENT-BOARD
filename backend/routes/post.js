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
  let success = false;
  try {
    // let user = await User.findOne({ email: email });
    const user = new post({
      company_name,
      description,
      location,
      department,
      CTC,
      department,
      role,
      link,
      vacancy,
      stipend,
      eligibility,
    });

    const doc = await post.save();
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
