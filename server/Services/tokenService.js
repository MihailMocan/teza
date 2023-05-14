import "dotenv/config";
import jwt from "jsonwebtoken";

const accessKey = process.env.JWT_ACCESS_KEY;
const refreshKey = process.env.JWT_REFRESH_KEY;

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, accessKey, { expiresIn: "10000y" });
    const refreshToken = jwt.sign(payload, refreshKey, { expiresIn: "30m" });
    return { accessToken, refreshToken };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }
}

export const TokenServiceInstance = new TokenService();
