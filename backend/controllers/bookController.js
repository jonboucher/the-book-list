import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const sql = neon(DATABASE_URL);
