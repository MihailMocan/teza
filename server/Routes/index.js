import express from "express";
import { router as authRouter } from "./auth.js";
import { router as serviceRouter } from "./service.js";
import { router as documentsRouter } from "./documents.js";
import { accessMiddleware } from "../Middlewares/accessMiddleware.js";
const Router = express.Router();

Router.use("/auth", authRouter);
Router.use("/services", serviceRouter);
Router.use("/documents", documentsRouter);

export default Router;
