import { generateIDNP, generateSerie } from "../Utils/Documents/Passport.js";
import Passport from "../Models/Passport.js";
import Users from "../Models/Users.js";
import { Error } from "mongoose";
import Documents from "../Models/Documents.js";
import { createYear } from "../Utils/Functions/GetDate.js";

class DocumentController {
  async createPassport(req, res, next) {
    try {
      const user = req.user;
      const userPassport = await Passport.findOne({ user });
      if (userPassport)
        return res
          .status(200)
          .json({ statusCode: 400, idnp: userPassport.idnp });
      const userCandidate = await Users.findById(user);
      const { firstName, lastName, birthday, nationality, address, city } =
        userCandidate;
      const idnp = generateIDNP();
      const series = generateSerie();
      const passportData = {
        user,
        firstName,
        lastName,
        birthday,
        nationality,
        address,
        city,
        idnp,
        series,
      };
      const expiredAt = createYear(5);
      const passportInfo = { ...passportData, idnp, series, expiredAt };
      const data = await new Passport(passportInfo).save();
      const userDocument = await Documents.findOne({ user });
      if (!userDocument)
        await new Documents({ user, documents: [data._id] }).save();
      else {
        await userDocument.documents.push(data._id);
      }
      return res.status(200).json({ statusCode: 200, data });
    } catch (e) {
      next(e);
    }
  }

  async getPassportByID(req, res, next) {
    try {
      const user = req.user;
      const passportInfo = await Passport.findOne({ user });
      if (!passportInfo) throw new Error("You haven't passport");
      return res.status(200).json({
        statusCode: 200,
        data: passportInfo,
      });
    } catch (e) {
      next(e);
    }
  }
  async getUserByIDNP(req, res, next) {
    try {
      const idnp = req.query.idnp;
      if (!idnp) throw new Error("Not IDNP in your request !");
      const passportInfo = await Passport.findOne({ idnp });
      if (!passportInfo) throw new Error("User with this idnp didn't found");
      return res.status(200).json({
        statusCode: 200,
        data: passportInfo,
      });
    } catch (e) {
      next(e);
    }
  }
  async getDocuments(req, res, next) {
    try {
      const user = req.user;
      const documents = await Documents.findOne({ user });
      if (!documents) throw new Error("You haven't documents");

      const [documentsInfo] = await Promise.all(
        documents.documents.map((document) => Passport.findById(document))
      );
      return res.status(200).json({ statusCode: 200, data: documentsInfo });
    } catch (e) {
      next(e);
    }
  }
}

export const DocumentControllerInstance = new DocumentController();
