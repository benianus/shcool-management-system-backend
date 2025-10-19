import { axiosClient } from "@/api/axios";

export const TeacherRepository = {
  getAll: async (page: number = 1, limit: number = 9) => {
    try {
      const response = await axiosClient.get(
        `/api/teachers?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getFilteredTeachers: async (
    name: string | number,
    page: number = 1,
    limit: number = 9
  ) => {
    try {
      const response = await axiosClient.get(
        `/api/teachers/filter?name=${name}&page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
