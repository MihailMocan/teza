import { TokenServiceInstance as TokenService } from "../Services/tokenService.js";
export const accessMiddleware = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader)
      throw new Error("Cannot find authorization header");
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) throw new Error("Not access token in header");
    const userData = TokenService.validateAccessToken(accessToken);
    if (!userData) {
      const { refreshToken } = req.session;
      if (!refreshToken) throw new Error("You are not logged !");
      const data = TokenService.validateRefreshToken(refreshToken);
      if (!data) {
        throw new Error("Wrong token!");
      } else {
        return res.status(200).json({
          status: "Refresh",
          message: "You need to refresh token",
        });
      }
    }
    console.log("UserData : ", userData.email);
    req.user = userData._id;
    next();
  } catch (e) {
    next(e);
  }
};
