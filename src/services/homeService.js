import axiosInstance from "src/helpers/axiosInstance";

class HomeService {
  getPosts = () => {
    return axiosInstance.get("/posts");
  };
}

export default new HomeService();
