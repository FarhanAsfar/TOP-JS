import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function insertTodo(title: string, done: boolean, description: string, userId: number){
    const res = await prisma.todo.create({
        data: {
            title,
            done,
            description,
            userId
        }
    })
    console.log(res);
}

insertTodo("Paytm Backend", false, "sdfdsf", 3)