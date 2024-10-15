import express from "express";
import fetch from "node-fetch";
const app = express();

// Allow CORS for all domains (you can limit this in production)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Route to fetch the quote from ZenQuotes API
app.get("/quote", async (req, res) => {
  try {
    const fetch = await import("node-fetch").then((module) => module.default); // Dynamic import
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching quote");
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
