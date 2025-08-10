import fs from "fs";
import path from "path";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

async function runMigrations() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }, // required for Neon. Need to be changed for prod!!!
    });

    try {
        await client.connect();

        const migrationsDir = path.join(process.cwd(), "backend", "migrations");
        const files = fs.readdirSync(migrationsDir).sort();

        for (const file of files) {
            const filePath = path.join(migrationsDir, file);
            const sql = fs.readFileSync(filePath, "utf8");
            console.log(`Running migration: ${file}`);
            await client.query(sql);
        }

        console.log("✅ All migrations completed successfully");
    } catch (err) {
        console.error("❌ Migration failed:", err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

runMigrations();
