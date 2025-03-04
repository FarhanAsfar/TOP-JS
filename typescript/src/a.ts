//union
// function greet(id: (number | string)){
//     console.log(id);
// }
// greet(1)
// greet("1");


//intersection
type Employee = {
    name: string;
    salary: number;
};

interface Manager {
    name: string;
    department: string;
};

type Lead = Employee & Manager;


const me: Lead = {
    name: "farhan",
    salary: 190,
    department: "cse",
}


