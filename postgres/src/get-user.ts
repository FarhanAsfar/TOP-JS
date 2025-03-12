import { Client } from "pg";

async function getUser(email: string){
    const client = new Client({
        connectionString: "postgresql://neondb_owner:npg_nPblzR4SIAU8@ep-black-leaf-a8wfaxro-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
        // host: 'localhost',
        // port: 5432,
        // database: 'postgres',
        // user: 'postgres',
        // password: 'farhan21',
    });

    await client.connect();
    const query = "SELECT * FROM students WHERE email=$1";
    const result = await client.query(query, ["asfar@gmail.com"]);

    if(result.rows.length > 0){
        console.log('user found: ', result.rows[0]);
        return result.rows[0];
    }else{
        console.log("No user found");
    }
}

getUser('farhan@gamil.com').catch(console.error);