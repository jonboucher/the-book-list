import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

import listRoutes from "./routes/listRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(cors());

const searchBooks = async (req, res) => {
    const searchTerms = req.query.search;
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=${API_KEY}`
        );

        res.json(response.data);
    } catch (err) {
        console.error("API call failed: ", err.message);
        res.status(500).json({ error: "Failed to fetch external data" });
    }
};

app.get("/search-books", searchBooks);

app.use("/api/lists", listRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
