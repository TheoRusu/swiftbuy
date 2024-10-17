import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "User login successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});
export default router;
