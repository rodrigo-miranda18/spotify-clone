import axios from 'axios';
import Router from 'next/router';

export const spotifyApi = axios.create({
  baseURL: process.env.SPOTIFY_API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const api = axios.create({
  baseURL: process.env.NEXT_APP_BASE_URL,
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      Router.push('/login');
    }
    return error;
  }
);
