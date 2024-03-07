require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const userRouter = require("./routes/user")
const studentRouter = require("./routes/student")
const mongoDB = require("./db")
// mongoDB();
// import userRouter from "./routes/user.js";

const PORT = 5000

const app = express();



app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/", require("./routes/user").router);
app.use("/", require("./routes/student").router)


app.listen(5000, () => {
    console.log("BE started at port 5000");
});