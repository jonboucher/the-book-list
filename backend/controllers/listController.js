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
