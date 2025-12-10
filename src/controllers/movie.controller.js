import asyncHandler from "../middlewares/asyncHandler.js";

import prisma from "../config/db.js";

export const getAllMovies = asyncHandler(async (req, res) => {
  const movies = await prisma.movie.findMany();
  res.status(200).json({ success: true, data: movies });
});
