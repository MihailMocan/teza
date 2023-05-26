import express from "express";
import { DocumentControllerInstance as controller } from "../Controller/documentController.js";
import { accessMiddleware } from "../Middlewares/accessMiddleware.js";

export const router = express.Router();

router.post("/createPassport", accessMiddleware, controller.createPassport);
router.get("/getPassportByID", accessMiddleware, controller.getPassportByID);
router.get("/getUserByIDNP", controller.getUserByIDNP);
router.get("/getDocuments", accessMiddleware, controller.getDocuments);
