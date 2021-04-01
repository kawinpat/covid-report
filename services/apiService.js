import axios from "axios";

const apiUrl = process.env.VUE_APP_BASEURL;

class apiService {
    static async get(path) {
        try {
            const res = await axios.get(`${apiUrl}/${path}`);
            return res.data;
        } catch (error) {
            console.log(
                `Call apiService get service with ${path} failure and error msg is  ${error}`
            );
            return null;
        }
    }
}
export default apiService;