import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});
