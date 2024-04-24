import axiosInstance from "src/helpers/axiosInstance";

class HomeService {
  getPosts = () => {
    return axiosInstance.get("/posts?_page=1");
  };
}

export default new HomeService();
