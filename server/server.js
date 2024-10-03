import "dotenv/config";
import express from "express";
import cors from "cors";
import models, { connectDB } from "./models/index.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("SwiftBuy API Home Route");
});

const port = 5000 || process.env.PORT;
connectDB()
  .then(async () => {
    app.listen(5000, () => {
      console.log(`SwiftBuy API started on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Failed to connect to DB");
  });
