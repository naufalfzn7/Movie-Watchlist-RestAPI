export const test = (req, res) => {
  const cookie = req.cookies;
  res
    .status(200)
    .json({ success: true, message: "Test route is working!", cookie: cookie });
};
