import prisma from "../config/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const addToWatchlist = asyncHandler(async (req, res) => {
  const { movieId, status, rating, notes, userId } = req.body;

  const existMovie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!existMovie) {
    const error = new Error("Movie does not exist");
    error.statusCode = 404;
    throw error;
  }

  //check if movie already in watchlist
  const existInWatchlist = await prisma.watchlistItem.findUnique({
    where: {
      userId_movieId: {
        userId,
        movieId,
      },
    },
  });

  if (existInWatchlist) {
    const error = new Error("Movie already in watchlist");
    error.statusCode = 400;
    throw error;
  }

  const watchlistItem = await prisma.watchlistItem.create({
    data: {
      movieId,
      userId,
      status: status || "PLANNED",
      rating,
      notes,
    },
  });

  if (!watchlistItem) {
    const error = new Error("Failed to add movie to watchlist");
    error.statusCode = 500;
    throw error;
  }

  res.status(201).json({
    success: true,
    message: "Movie added to watchlist successfully",
    data: watchlistItem,
  });
});
