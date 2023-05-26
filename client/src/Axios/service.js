import axios from "axios";
import { baseURL } from "./index";
class ServiceAPI {
  checkIDNP({ idnp }) {
    return axios
      .get(`${baseURL}/documents/getUserByIDNP?idnp=${idnp}`)
      .then((r) => r.data);
  }
  createPassport() {
    const token = `Bearer ${localStorage.getItem("token")}`;
    return axios
      .post(
        `${baseURL}/documents/createPassport`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((r) => r.data);
  }
}

export const ServiceAPIInstance = new ServiceAPI();
