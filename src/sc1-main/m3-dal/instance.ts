import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/', // my training authorization server
  withCredentials: true,
})

export const userInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
})