import { sql } from "../config/db";

export const createList = async (req, res) => {
    const { title, description, userID } = req.body;

    try {
        const newList = await sql`
            INSERT INTO lists (title, description, userID)
            VALUES (${title}, ${description}, ${userID})
            RETURNING *
        `;
    } catch (err) {
        console.log("Error in createList function", err);
    }
};
