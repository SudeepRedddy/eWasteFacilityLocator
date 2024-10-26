const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const pinRoute = require("./routes/pins");

dotenv.config();

app.use(express.json());

mongoose 
 .connect(process.env.MONGO_URL)   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/user", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});