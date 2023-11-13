import axios from "axios";

axios.interceptors.response.use((config) => {
  config.data = {
    message: "Ok",
    data: config.data,
  };

  return config;
});

export { axios as Axios };
