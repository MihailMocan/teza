import axios from "axios";
import { baseURL } from "./index";

class AuthRequest {
  login(userInfo) {
    return axios
      .post(`${baseURL}/auth/login`, { userInfo }, { withCredentials: true })
      .then((data) => data.data)
      .catch((data) => console.log(data.response.data));
  }
  registration(userInfo) {
    return axios
      .post(
        `${baseURL}/auth/registration`,
        { userInfo },
        { withCredentials: true }
      )
      .then((data) => data.data)
      .catch((data) => data);
  }
}
export const AuthRequestInstance = new AuthRequest();
