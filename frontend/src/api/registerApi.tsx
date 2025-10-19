import { axiosClient } from "./axios";

export const RegisterApi = {
  getCsrf: async () => {
    return await axiosClient.get("/sanctum/csrf-cookie");
  },
  register: async (values) => {
    return await axiosClient.post("/register", values);
  },
};
