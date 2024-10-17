import "dotenv/config";
import express from "express";
import cors from "cors";
import models, { connectDB } from "./models/index.js";
import routes from "./routes/index.js";
import authenticateToken from "./middleware/auth.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.send("SwiftBuy API Home Route");
});

app.get("/api/protected", authenticateToken, (req, res) => {
  res.send("Protected SwiftBuy API Route");
});

app.use("/api/auth", routes.auth);

const port = process.env.PORT || 5000;
connectDB()
  .then(async () => {
    app.listen(5000, () => {
      console.log(`SwiftBuy API started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to DB", error);
  });
