import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const sql = neon(DATABASE_URL);

export const createList = async (req, res) => {
  const { user_id, title, description } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newList = await sql`
            INSERT INTO book_lists (user_id, title, description)
            VALUES (${user_id}, ${title}, ${description})
            RETURNING *
        `;

    res.status(201).json({ success: true, data: newList[0] });
  } catch (err) {
    console.log('Error in createList function', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const getLists = async (req, res) => {
  const { id } = req.params;

  try {
    const lists = await sql`
            SELECT
              bl.id AS list_id,
              bl.title AS list_title,
              bl.description AS list_description,
              bl.created_at AS list_created_at,
              b.id AS book_id,
              b.title AS book_title,
              b.authors AS book_authors,
              b.thumbnail_url AS book_thumbnail_url
            FROM 
              book_lists bl
            LEFT JOIN 
              list_books lb ON bl.id = lb.list_id
            LEFT JOIN 
              books b ON lb.book_id = b.id
            WHERE 
              bl.user_id = ${id}
            ORDER BY 
              bl.created_at DESC
        `;
    const groupedLists = lists.reduce((acc, row) => {
      const listId = row.list_id;

      if (!acc[listId]) {
        acc[listId] = {
          id: listId,
          title: row.list_title,
          description: row.list_description,
          createdAt: row.list_created_at,
          books: [],
        };
      }

      if (row.book_id) {
        acc[listId].books.push({
          id: row.book_id,
          title: row.book_title,
          authors: row.book_authors,
          thumbnailUrl: row.book_thumbnail_url,
        });
      }

      return acc;
    }, {});

    res.status(200).json({
      success: true,
      data: Object.values(groupedLists),
    });
  } catch (err) {
    console.log('Error in getLists function', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const getBook = async (req, res) => {
  const { bookId } = req.body;

  try {
    const book = await sql`
            SELECT * FROM books 
            WHERE id=${bookId}
        `;
    res.status(201).json({ success: true, data: book[0] });
  } catch (err) {
    console.log('Error in getBook function', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const createBook = async (req, res) => {
  const {
    isbn_13,
    isbn_10,
    title,
    subtitle,
    authors,
    publisher,
    published_date,
    description,
    page_count,
    categories,
    thumbnail_url,
    raw_json,
  } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: 'Error adding book' });
  }

  try {
    const newBook = await sql`
        INSERT INTO books 
            (isbn_13,
            isbn_10,
            title,
            subtitle,
            authors,
            publisher,
            published_date,
            description,
            page_count,
            categories,
            thumbnail_url,
            raw_json)
        VALUES 
            (${isbn_13},
            ${isbn_10},
            ${title},
            ${subtitle},
            ${authors},
            ${publisher},
            ${published_date},
            ${description},
            ${page_count},
            ${categories},
            ${thumbnail_url},
            ${raw_json})
        RETURNING *
        `;
    res.status(201).json({ success: true, data: newBook[0] });
  } catch (err) {
    console.log('Error in createBook function', err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const addBookToList = async (req, res) => {
  const { listId, bookId } = req.body;

  try {
    const updatedList = await sql`
            INSERT INTO list_books (list_id, book_id)
            VALUES (${listId}, ${bookId})
            RETURNING *
        `;
    res.status(201).json({ success: true, data: updatedList[0] });
  } catch (err) {
    console.log('Error in addBookToList function', err);

    if (err.code === '23503') {
      // foreign_key_violation
      return res.status(400).json({
        success: false,
        message: 'List ID or Book ID does not exist',
      });
    }

    if (err.code === '23505') {
      // unique_violation
      return res.status(409).json({
        success: false,
        message: 'This book is already in the list',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
