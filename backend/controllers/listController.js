import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

const sql = neon(DATABASE_URL);

export const createList = async (req, res) => {
    const { user_id, title, description } = req.body;

    if (!title) {
        return res
            .status(400)
            .json({ success: false, message: "All fields are required" });
    }

    try {
        const newList = await sql`
            INSERT INTO book_lists (user_id, title, description)
            VALUES (${user_id}, ${title}, ${description})
            RETURNING *
        `;

        res.status(201).json({ success: true, data: newList[0] });
    } catch (err) {
        console.log("Error in createList function", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
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
        console.log("Error in getBook function", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
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
        return res
            .status(400)
            .json({ success: false, message: "Error adding book" });
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
        res.status(201).json({ success: true, message: newBook[0] });
    } catch (err) {
        console.log("Error in createBook function", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
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
        console.log("Error in addBookToList function", err);

        if (err.code === "23503") {
            // foreign_key_violation
            return res.status(400).json({
                success: false,
                message: "List ID or Book ID does not exist",
            });
        }

        if (err.code === "23505") {
            // unique_violation
            return res.status(409).json({
                success: false,
                message: "This book is already in the list",
            });
        }
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
