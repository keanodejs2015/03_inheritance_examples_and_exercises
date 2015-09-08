// __proto__ approach
var vehicle = {
  type : 'vehicle'
};

var car = {};
var bike = {};
car.__proto__ = vehicle;
bike.__proto__ = vehicle;

car.type = 'Car';
vehicle.age = 78;

// Object.create() approach
var animal = {
  type : 'animal', 
  maxSpeed : 111
};

var dog = Object.create(animal);
var cat = Object.create(animal);

dog.type = 'Dog';
cat.maxSpeed = 200;
animal.age = 19;

// Constructor function approach
function Machine () {
  
}

var dishwasher = new Machine();
var radio = new Machine();

dishwasher.waterUse = 100;
Machine.prototype.age = 19;
radio.age = 10;

console.log(dishwasher);
console.log(dishwasher.age);
console.log(Machine.prototype);





