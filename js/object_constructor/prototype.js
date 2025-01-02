//Prototype Chain

const object1 = {
    name: 'farhan',
    age: 24,
}

const object2 = Object.create(object1);

object2.department = 'CSE';


console.log(`${object2.name} ${object2.age}`); 

console.log(object1.department);