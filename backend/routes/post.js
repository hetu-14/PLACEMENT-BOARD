const model = require("../mongo/post");
const express = require("express");
const post = model.post;
const router = express.Router();
// const Category = require('../models/Category')

router.post("/showpost", async (req, res) => {
  try {
    const fetched_data = await post.find();
    // console.log("om");
    // console.log(fetched_data);
    res.send(fetched_data);
  } catch (error) {
    console.log(error.message);
    res.send("server error");
  }
});

router.post("/addpost", async (req, res) => {
  //   const {} = req.body;
  let success = false;
  const {
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
  } = req.body;

  console.log(company_name);
  console.log(description);

  console.log(location);

  console.log(CTC);

  try {
    // let user = await post.findOne({ email: email });
    const user = new post({
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
    });
    console.log("om post created");
    // console.log(company_name);

    const doc = await user.save();
    console.log(doc);
    success = true;
    res.json({
      message: "Post created succesfully...",
      success: success,
    });
  } catch (err) {
    console.log("om post not created");
    // console.log(user);
    success = false;
    res.send({ err, success: false });
  }
});

exports.router = router;
