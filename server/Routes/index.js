import express from "express";
import { router as authRouter } from "./auth.js";

const Router = express.Router();

Router.use("/auth", authRouter);

export default Router;
