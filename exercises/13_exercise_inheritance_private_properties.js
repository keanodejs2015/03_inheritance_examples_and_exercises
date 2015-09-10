// Create an animal object that has 2 private properties 
// 'type' and 'name', and public getters and setters 
// for both of the private properties.

// with this animal as a base create 3 dogs, and 3 cats, 
// and set and get the name and type for them all

var animal = (function() {
  
    var type;

  return { 
    setType: function(x) {
      this.type = x;
    },
    getType: function() {
      return this.type; 
    }
  };   
})();

var dog = Object.create(animal);
var pitbull = Object.create(dog);
var chiwawa = Object.create(dog);
dog.setType('dog');
pitbull.setType('pitbull');


console.log(dog.getType());
console.log(pitbull.getType());
console.log(chiwawa.getType());
