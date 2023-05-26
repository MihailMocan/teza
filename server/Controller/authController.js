import { logger } from "../Utilities/Logger.js";
import Users from "../Models/Users.js";
import bcrypt from "bcrypt";
import { TokenServiceInstance as TokenService } from "../Services/tokenService.js";
class AuthController {
  async registration(req, res, next) {
    try {
      const { userInfo } = req.body;
      const { email, password } = userInfo;
      if (!email) {
        throw new Error("You should send email");
      }
      const userCandidate = await Users.findOne({ email });
      if (userCandidate) {
        throw new Error("A person with this email already exist !");
      }
      const hashPassword = await bcrypt.hash(password, 2);

      const newUser = await new Users({
        ...userInfo,
        password: hashPassword,
      }).save();

      const { _id } = newUser;
      const token = TokenService.generateToken({ _id, email });
      res.status(200).json({ statusCode: 200, userInfo, ...token });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body.userInfo;
      if (!email || !password)
        throw new Error("Email or password not in your request !");
      const userCandidate = await Users.findOne({ email });
      if (!userCandidate) throw new Error("User with this data didn't exist !");
      const isPasswordsEqual = await bcrypt.compare(
        password,
        userCandidate.password
      );
      if (!isPasswordsEqual)
        throw new Error("User with this data didn't exist !");
      const { _id } = userCandidate;
      const token = TokenService.generateToken({ _id, email });
      res.status(200).json({ statusCode: 200, ...token });
    } catch (e) {
      next(e);
    }
  }
  async me(req, res, next) {
    try {
      const currentUser = req.user;
      const userInfo = await Users.findById(currentUser);
      return res.status(200).json({ statusCode: 200, userInfo });
    } catch (e) {
      next(e);
    }
  }
}
export const AuthControllerInstance = new AuthController();
