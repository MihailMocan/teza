import Users from "../Models/Users.js";
import bcrypt from "bcrypt";
import { TokenServiceInstance as TokenService } from "../Services/tokenService.js";
import Services from "../Models/Services.js";
class ServiceController {
  async getServices(req, res, next) {
    try {
      const services = await Services.find();
      return res.status(200).json({
        statusCode: 200,
        services,
      });
    } catch (e) {
      next(e);
    }
  }
  async createService(req, res, next) {
    try {
      const { serviceInfo } = req.body;
      const { serviceName, description } = serviceInfo;

      if (!serviceName) {
        throw new Error("Service name is required!");
      }
      await new Services({ serviceName, description }).save();
      return res.status(200).json({
        statusCode: 200,
        message: "SUCCESS",
      });
    } catch (e) {
      next(e);
    }
  }
}

export const ServiceControllerInstance = new ServiceController();
