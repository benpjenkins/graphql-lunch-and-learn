const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 1337;
const { generateMockData } = require("./api/mockData");

const createApp = () => {
  // logging middleware
  app.use(morgan("dev"));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", require("./api"));
  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

const boot = async () => {
  generateMockData();
  await createApp();
  await startListening();
};

boot();

module.exports = app;
