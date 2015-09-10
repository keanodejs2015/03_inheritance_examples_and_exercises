function Robot () {
	this.motors = 2;
}

var robby = new Robot();

// What is the result of:
console.log(robby instanceof Robot);

// 1. true
// 2. false
// 3. undefined
// 4. throws

// What is printed out:
console.log(robby.motors);

// 1. true
// 2. false
// 3. 2
// 4. undefined