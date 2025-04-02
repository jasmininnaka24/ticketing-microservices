import express from "express";
import { json } from "body-parser";

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(json());

app.get("/api/orders", (req, res) => {
  console.log("Hi from order service");
  res.send("Hi from order service");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
