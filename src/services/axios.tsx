import axios from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'private-key': process.env.NEXT_PUBLIC_PRIVATE_KEY,
  },
});
