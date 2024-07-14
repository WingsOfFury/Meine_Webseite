import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "akansel_meine_webseite",
  })
  .then(() => {
    console.log("Mit MongoDB verbunden");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const counterSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);

app.get("/api/counter", async (req, res) => {
  try {
    let counter = await Counter.findOne();
    if (!counter) {
      counter = new Counter();
      await counter.save();
    }
    res.json(counter);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/increment", async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    res.json(counter);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
