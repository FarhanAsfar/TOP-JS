interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filteredUsers(users: User[]){
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: 'farhan',
    lastName: 'asfar',
    age: 24
},
{
    firstName: 'alan',
    lastName: 'donald',
    age: 10
}
]))

