const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
// API Route (Example)
app.get("/compress", (req, res) => {
  res.json({ status: "Backend is running" });
});
// Start server
app.listen(PORT, () => {
  console.log("Server is Running...");
});