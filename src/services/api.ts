// AXIOS
import axios from 'axios';

const api = axios.create({
  baseURL: "https://62eeb542c1ef25f3da8dba0f.mockapi.io/api/kabum"
});

export default api;