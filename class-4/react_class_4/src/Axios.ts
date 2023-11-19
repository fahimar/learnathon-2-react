import axios from "axios";

axios.interceptors.response.use((config) => {
  config.data = {
    message: "Ok",
    data: config.data,
  };

  return config;
});
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "jwt token";
  config.params = {
    ...config.params,
    userId: "something",
  };
  return config;
});

export { axios as Axios };
