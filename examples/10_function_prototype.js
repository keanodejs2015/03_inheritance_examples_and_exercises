function Alien () {
	
}

// All functions have a property called prototype.
// It is confusing, but it is NOT the functions prototype 
console.log(Alien.__proto__ === Alien.prototype); // false

// All new objects inherit from that property
var zippy = new Alien();
console.log(zippy.__proto__ === Alien.prototype); // true

// A good claryfication would be that there is the
// * The Objects prototype: __proto__
// * The Functions prototype property: prototype
// And the relation between them is:
// object.__proto__ === Constructor.prototype

// a graphical explanation can be found here:
// https://docs.google.com/drawings/d/1AKJcvxs0t3iGtqkRV8rFAWlo7tojkOSwjfhr1NWaTb0/pub?w=889&h=482

