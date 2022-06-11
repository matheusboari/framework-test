import 'dotenv/config';

export const PORT = process.env.NODE_PORT || 3333;
export const ENV = (process.env.NODE_ENV || 'development').trim();
