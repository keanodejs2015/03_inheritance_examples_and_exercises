// Name with capital letter in constructor functions!
function Machine () {
	this.isOn = true;
};
// Create a new object
var car = new Machine();

console.log('car instanceof Machine? ');
console.log(car instanceof Machine);
