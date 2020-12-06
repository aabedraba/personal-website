import express from "express";
import next from "next";
import { parse } from "url";

const server = express();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHanlder = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  server.use((req, res) => {
    const parsedUrl = parse(req.url, true);
    nextHanlder(req, res, parsedUrl);
  });

  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
  });
});
