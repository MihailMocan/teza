import express from "express";
import { ServiceControllerInstance as controller } from "../Controller/serviceController.js";

export const router = express.Router();

router.get("/", controller.getServices);
router.post("/addService", controller.createService);
