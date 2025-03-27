import express from "express";

const router = express.Router();

router.get("/api/users/currentUser", (req, res) => {
  console.log("Hi there!");
  res.send("Hi there!");
});

export { router as currentUserRouter };
