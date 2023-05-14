import axios from "axios";
import { baseURL } from "./index";

class AuthRequest {
  login(userInfo) {
    axios
      .post(`${baseURL}/auth/login`, { userInfo }, { withCredentials: true })
      .then((data) => data.data);
  }
  registration(userInfo) {
    axios
      .post(
        `${baseURL}/auth/registration`,
        { userInfo },
        { withCredentials: true }
      )
      .then((data) => data.data);
  }
}
export const AuthRequestInstance = new AuthRequest();
