import axios from 'axios'

import {API_ROOT} from "../../config/config";

export default () => {

    let ax = axios.create({
        baseURL: API_ROOT,
        headers: {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJnaXZlbl9uYW1lIjoiSmFuZSIsImZhbWlseV9uYW1lIjoiVGhvIiwiZW1haWwiOiJqYW5ldGhvQGdtYWlsLmNvbSJ9.Z_RqcJ6FUZQEBdEyKEsiCb7V2e6Q0srSDOGpuEX1RPyPY_AHw3Phq5O70SmYIq1b00GXt5eWMK3kW7cSejc1vcORPf73kJYdkY-9eFkBET92iNvwrmRNdQEHJHk-jipNQPnQ85XxBDnP8QiQIW-hvoiEVTBGksGfgvcGy-SyGmjwaW6iHaQmul04s5HIzdfdXekUBoVUkk0iNMIku-UrDd1QdS_vZn0ocNDSDocabxLaqdvM5bW4tlqui6gjYGZ4T4kxTx5Um99QCzsurHqqA6_x1DYgBVK4uxRlqs4FXVUUlbycyzyKkDuaBFOJGNb9FOihKQVlkGGeatp1EhXxtw",
            'Content-Type': 'application/json'
        }

    });
    ax.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (401 === error.response.status) {
            //window.location = "/";
            return Promise.reject(error);

        } else if (error.response.status >= 400) {
            return Promise.reject(error);
        }
    });

    return ax;
}
