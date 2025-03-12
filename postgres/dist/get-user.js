"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:npg_nPblzR4SIAU8@ep-black-leaf-a8wfaxro-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
            // host: 'localhost',
            // port: 5432,
            // database: 'postgres',
            // user: 'postgres',
            // password: 'farhan21',
        });
        yield client.connect();
        const query = "SELECT * FROM students WHERE email=$1";
        const result = yield client.query(query, ["asfar@gmail.com"]);
        if (result.rows.length > 0) {
            console.log('user found: ', result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log("No user found");
        }
    });
}
getUser('farhan@gamil.com').catch(console.error);
