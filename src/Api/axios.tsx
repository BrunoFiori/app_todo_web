import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

let baseURL;

switch (process.env.NODE_ENV) {
  case 'local':
    baseURL = process.env.BASE_URL_LOCAL;
    break;
  case 'development':
    baseURL = process.env.BASE_URL_DEV;
    break;
  case 'qas':
    baseURL = process.env.BASE_URL_QAS;
    break;
  case 'production':
    baseURL = process.env.BASE_URL_PRD;
    break;
  default:
    console.log('Ambiente não reconhecido');
}

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: Number(process.env.TIMEOUT),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
