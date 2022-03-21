import axiosClient from './axiosClient';
//https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=max&srsearch=1
const wikiApi = {
  getAll(params) {
    const url = '';
    return axiosClient.get(url, { params });
  },
};

export default wikiApi;
