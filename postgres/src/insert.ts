import { Client } from "pg"

async function insertData(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: "postgres",
        password: 'farhan21'
    });

    try {
        await client.connect();

        const insertQuery = "INSERT INTO students (username, email,password) VALUES ('asfar', 'asfar@gamil.com', 'farhan')"

        const res = await client.query(insertQuery);
        console.log("Insert success: ", res);
    } catch (error) {
        console.error("Couldn't insert: ", error);
    } finally{
        await client.end();
    }
}

insertData();