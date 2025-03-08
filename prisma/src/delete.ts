import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


interface DeleteParams{
    firstName: string;
    lastName: string;
}

async function deleteUser(email:string) {
    const res = await prisma.user.delete({
        where: {email:  email},
    })
    console.log(res);
}

deleteUser("asfar@gmail.com");

