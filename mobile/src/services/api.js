import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rapidapi.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': 'eb013d50b2msh9b0538c64a478afp12c77ejsn1547d1961a35',
  },
});

export default api;
