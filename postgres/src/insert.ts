import { Client } from "pg"

async function insertData(username: string, password: string, email: string){
    const client = new Client({
        connectionString: "postgresql://neondb_owner:npg_nPblzR4SIAU8@ep-black-leaf-a8wfaxro-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
        // host: 'localhost',
        // port: 5432,
        // database: 'postgres',
        // user: "postgres",
        // password: 'farhan21'
    });

    try {
        await client.connect();

        const insertQuery = `INSERT INTO students (username, email,password) VALUES ($1, $2, $3)`;
        const values = [username, password, email];

        const res = await client.query(insertQuery, values);
        console.log("Insert success: ", res);
    } catch (error) {
        console.error("Couldn't insert: ", error);
    } finally{
        await client.end();
    }
}

insertData('farhan', 'farhan@gmail.com', '1234');