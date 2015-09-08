function Alien(name) {
    this.name = name;
}

// the function Alien has a prototype property
// we can add properties to this function prototype
Alien.prototype.kind = 'alien'

// when we create a new object using new
var zippy = new Alien('Zippy');

// the __proto__ of the new object points to alien.prototype
zippy.__proto__ == Alien.prototype //=> true

// in the new object we have access to properties defined in Alien.prototype
zippy.kind //=> alien

// below is not the right way to do it, but if we did the result would be:
Alien.age = 30;

console.log(Alien.kind); // undefined
console.log(Alien.age); // 30
console.log(zippy.age); // undefined
console.log(zippy.kind); // alien