import axios from "axios";
import Vue from "vue";

const apiUrl = process.env.VUE_APP_BASEURL;
const loaderShow = () => {
    return Vue.$loading.show({
        container: null,
        canCancel: false,
        onCancel: null,
    });
};

class apiService {
    static async get(path) {
        let loader = loaderShow();
        try {
            const res = await axios.get(`${apiUrl}/${path}`);
            loader.hide();
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