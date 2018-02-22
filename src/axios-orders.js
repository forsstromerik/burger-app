import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-b03e4.firebaseio.com/'
});

export default instance;
