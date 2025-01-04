//Without using prototype
function Student(name, department){
    this.name = name;
    this.department = department;

    // this.info = function (){
    //     const info = `${this.name} from ${this.department} department`;

    //     return info;
    // }
}

//Using prototype
Student.prototype.info = function(){
    const info = (`${this.name} from ${this.department} department`);

    return info;
}

const student1 = new Student('farhan', 'cse');
const student2 = new Student('alice', 'eee');

console.log(student1.info());
console.log(student2.info());

console.log(student1.info !== student2.info) //without prototype

console.log(student1.info === student2.info) //with prototype