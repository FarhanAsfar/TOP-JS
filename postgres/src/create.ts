import { Client } from "pg";

const client = new Client({
    // connectionString: "postgresql://neondb_owner:npg_nPblzR4SIAU8@ep-black-leaf-a8wfaxro-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: "postgres",
    password: 'farhan21'
})


async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE students (
            id SERIAL PRIMARY KEY,
            username VARCHAR(15) UNIQUE NOT NULL,
            email VARCHAR(30) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)
    console.log(result);
}

createUsersTable();
