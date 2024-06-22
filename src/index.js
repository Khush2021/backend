import app from "./app.js";
import logger from "./configs/logger.config.js";
import connectToMongo from "./db.js";

//mongodb connection
connectToMongo();

//env variables
const PORT = process.env.PORT;

let server;
server = app.listen(PORT, () => {
  logger.info(`Server is listening at ${PORT}`);
});

//error handler
const exitHandler = () => {
  if (server) {
    logger.info("Server Closed");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  if (server) {
    logger.info("Server Closed");
    process.exit(1);
  }
});
