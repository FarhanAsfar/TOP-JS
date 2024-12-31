function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

const player = new Player('bee', 'X');

console.log(player);

function Student(name, dept){
    this.name = name;
    this.dept = dept;
    this.sayName = function(){
        console.log(this.name);
    }
}

const studnet1 = new Student('asfar', 'cse');
const studnet2 = new Student('arnob', 'cse');

studnet1.sayName();
studnet2.sayName();