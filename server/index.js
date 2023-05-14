import express from "express";
import mongoose, { Mongoose } from "mongoose";
import "dotenv/config";
import bp from "body-parser";
import cors from "cors";
import { logger } from "./Utilities/Logger.js";
import router from "./Routes/index.js";
import { errorHandler } from "./Middlewares/errorMiddleware.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(router);

app.use(errorHandler);

const start = async () => {
  try {
    const server = app.listen(PORT, () =>
      logger.info(`[Express] The server  is started on PORT = ${PORT}`)
    );
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info("[Mongo] Connected to MongoDB");
  } catch (e) {
    logger.error(`[Error] ${e.message}`);
  }
};
start();
