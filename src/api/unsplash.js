import axios from 'axios';
const config = require('../config.json')
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      config.token
  }
});