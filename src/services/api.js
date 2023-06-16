import axios from "axios";

axios.defaults.baseURL = "https://648ada7a17f1536d65e9d634.mockapi.io";

export const getTweets = async (page, signal) => {
  const response = await axios.get(`/users?page=${page}&limit=3`, {
    signal,
  });

  return response.data;
};
