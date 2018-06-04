import axios from 'axios';

export const getPage = page => axios.get(`/api/contentful${page}`);

