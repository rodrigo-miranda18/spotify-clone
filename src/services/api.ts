import axios from 'axios';

export const spotifyApi = axios.create({
  baseURL: process.env.SPOTIFY_API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const api = axios.create({
  baseURL: process.env.NEXT_APP_BASE_URL,
});
