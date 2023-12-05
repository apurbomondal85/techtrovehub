import axios from "axios";

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: `http://localhost:5000`,
        headers: {'Authorization': `Bearer ${localStorage.getItem("secret-token")}`}
      });
  return axiosSecure;
}

export default useAxiosSecure