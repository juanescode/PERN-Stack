import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT ||3000;
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'admin123';
export const DB_DATABASE = process.env.DB_DATABASE || 'task_pj';
export const DB_DIALECT = process.env.DB_DIALECT || 'postgres';