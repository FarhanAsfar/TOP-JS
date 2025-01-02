function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`I am ${this.name}`);
}

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function(){
    console.log(`My marker is ${this.marker}`);
}

Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype);


const player1 = new Player('konstas', 'aus');
const player2 = new Player('bolt', 'nz');


player1.sayName();
player1.getMarker();

player2.sayName();
player2.getMarker();