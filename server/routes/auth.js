const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// test route to see if this stuff's alive or not lol
router.get("/test", (req, res) => {
  res.json({ message: "Auth route is workin fine!" });
});

// registrationn route (yea, lets pray this works)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Uhh user already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // user added.
    res.status(201).json({ message: "User registration went thru!" });
  } catch (error) {
    console.error("regestration failed hard:", error);
    res
      .status(500)
      .json({ message: "Oof. Server glitch during regestration." });
  }
});

// login route, returns token if all goes well
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Hmm.. wrong email or pass" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Hmm.. wrong email or pass" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // 1 hr login, don't stay too long 
    });

    res.status(200).json({
      message: "Logged in. You're in!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("login blew up:", error);
    res.status(500).json({ message: "Server hiccup during login" });
  }
});

// verify token route (handy when you need to check auth status)
router.get("/verify", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token found here" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) throw new Error("No user found with that ID");

    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: "Token ain't valid anymore" });
  }
});

module.exports = router;
