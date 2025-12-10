import { test } from "../controllers/test.controller.js";
import { Router } from "express";

const router = Router();

// Sample movie data

router.get("/", test);

export default router;
