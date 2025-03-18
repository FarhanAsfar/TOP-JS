//Prototype Chain

const object1 = {
    name: 'farhan',
    age: 24,
}

const object2 = Object.create(object1);

object2.department = 'CSE';


console.log(`${object2.name} ${object2.age}`);//object2 will also have access of the object1's properties as its inherits from object1. 

console.log(object1.department); //object1 will not have the 'department' property.