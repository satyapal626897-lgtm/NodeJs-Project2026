const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();   

const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB connected successfully!!");
})
.catch((err) => {
    console.log("MongoDB connection error:", err);
});


app.use("/admin", adminRoute);
app.use("/user", userRoute);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});