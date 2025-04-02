import express, { Request, Response } from "express";
import { json } from "body-parser";

const app = express();
const PORT = process.env.PORT || 3002;

// middleware
app.use(json());

app.get("/api/payment/confirm", (req: Request, res: Response) => {
  console.log("Hi from payment");
  res.send("Hi from payment");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
