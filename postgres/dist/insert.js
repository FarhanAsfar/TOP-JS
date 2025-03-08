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
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: "postgres",
            password: 'farhan21'
        });
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO students (username, email,password) VALUES ('asfar', 'asfar@gamil.com', 'farhan')";
            const res = yield client.query(insertQuery);
            console.log("Insert success: ", res);
        }
        catch (error) {
            console.error("Couldn't insert: ", error);
        }
        finally {
            yield client.end();
        }
    });
}
insertData();
