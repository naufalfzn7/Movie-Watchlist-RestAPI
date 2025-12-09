import { Router } from "express";

const router = Router();

// Sample movie data
router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Inception", director: "Christopher Nolan" },
    { id: 2, title: "The Matrix", director: "The Wachowskis" },
  ]);
});

export default router;
