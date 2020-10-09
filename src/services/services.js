import axios from 'axios';

const ApiUser = axios.create({
  baseURL: 'https://api.github.com/users/'
});

const ApiRepositories = axios.create({
  baseURL: 'https://api.github.com/users/'
});

export { ApiUser, ApiRepositories }

