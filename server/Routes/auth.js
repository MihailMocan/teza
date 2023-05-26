import express from "express";
import { AuthControllerInstance as controller } from "../Controller/authController.js";
import { accessMiddleware } from "../Middlewares/accessMiddleware.js";

export const router = express.Router();

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get("/me", accessMiddleware, controller.me);
