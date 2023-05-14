import express from "express";
import { AuthControllerInstance as controller } from "../Controller/authController.js";

export const router = express.Router();

router.post("/registration", controller.registation);
router.post("/login", controller.login);
