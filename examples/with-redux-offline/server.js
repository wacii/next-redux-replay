const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const delay = (_req, _res, next) => setTimeout(next, 400);

app.prepare().then(() => {
  const server = express();

  server.get("/succeed-always", delay, (_req, res) => {
    res.status(200).json({ some: "data" });
  });

  server.get("/succeed-sometimes", delay, (_req, res) => {
    if (Math.random() < 0.5) {
      res.status(500).json({ error: "server" });
    } else {
      res.status(200).json({ some: "data" });
    }
  });

  server.get("/fail-sometimes", delay, (_req, res) => {
    if (Math.random() < 0.5) {
      res.status(500).json({ error: "server" });
    } else {
      res.status(400).json({ error: "client" });
    }
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });
  server.listen(3000);
});
