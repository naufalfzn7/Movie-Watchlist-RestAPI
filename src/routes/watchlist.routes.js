import { Router } from "express";
import { addToWatchlist } from "../controllers/watchlist.controller.js";

const router = Router();

router.post("/", addToWatchlist);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
