import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import argon2 from 'argon2';

dotenv.config();

const { DATABASE_URL } = process.env;

const sql = neon(DATABASE_URL);

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await sql`
            SELECT * FROM users
            WHERE id=${id}
        `;
    res.status(201).json({ success: true, data: user[0] });
  } catch (err) {
    console.log('Error in getUser function', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const existingUser = await sql`
            SELECT * FROM users WHERE email = ${email} OR username = ${username}
        `;

    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'User with this username or email already exists',
      });
    }

    const hashed_password = await argon2.hash(password);

    const newUser = await sql`
            INSERT INTO users (username, email, password_hash)
            VALUES (${username}, ${email}, ${hashed_password})
            RETURNING *
        `;
    res.status(201).json({ success: true, data: newUser[0] });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedUser = await sql`
            DELETE FROM users WHERE id=${id}
            RETURNING *
        `;

    if (deletedUser.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: deletedUser[0] });
  } catch (err) {
    console.log('Error in deleteUser function', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
