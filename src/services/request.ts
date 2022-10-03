import axios from "axios";
import { SERVER_BASE_URL } from "../config/constants";

const client = (() => {
  return axios.create({
    baseURL: SERVER_BASE_URL + "api"
  });
})();

const request = async function (options: any) {
  // success handler
  const onSuccess = function (response: any) {
    return response.data;
  };

  // error handler
  const onError = function (error: any) {
    return Promise.reject(error.response);
  };

  // adding success and error handlers to client
  return client(options).then(onSuccess).catch(onError);
};

export default request;
