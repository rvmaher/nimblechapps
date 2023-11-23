import Axios from 'axios';

const baseAxios = Axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseAxios;
