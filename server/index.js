const express = require("express");
const mongoose = require("mongoose");//handles connectio to mongoDB and interacts with the database
const cors = require("cors");
require("dotenv").config();

const app = express();//sets up the server and handles routes, requests and responses
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());//it allows frontend to communicate with the backend without security blocks
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/inquiry", require("./routes/inquiry"));
app.use("/api/vehicles", require("./routes/vehicles"));


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)//this triggers the connection to MongoDB via Mongoose
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB error:", err));
