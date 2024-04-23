import axiosInstance from "src/helpers/axiosInstance";

class UserService {
  getUsers = () => {
    return axiosInstance.get("/users");
  };
}

export default new UserService();
