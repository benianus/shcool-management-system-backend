import { axiosClient } from "./axios";

export const LoginApi = {
  getCsrf: async () => {
    return await axiosClient.get("sanctum/csrf-cookie");
  },
  login: async (values) => {
    return await axiosClient.post("/login", values);
  },
};
