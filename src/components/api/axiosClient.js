// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs

const axiosClient = axios.create({
  baseURL: 'https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*',
  headers: {
    'content-type': 'text/plain',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

console.dir(axiosClient);

//Add a request interceptor
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
//Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
