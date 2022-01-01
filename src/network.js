import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://60523dc8fb49dc00175b7d04.mockapi.io",
});
export const axiosInstance2 = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
});

// axiosInstance.interceptors.request.use(
//     function (config) {
//         // Do something before request is sent
//         if (localStorage.getItem("token")) {
//             config.headers["Autherization"] = localStorage.getItem("token");
//         }
//         return config;
//     },
//     function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     }
// );

