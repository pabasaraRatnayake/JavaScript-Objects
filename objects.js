//JS VARIABLE
var x = 10;
document.writeln(x);	//OUTPUTS 10


// JS OBJECT
var course = {
	name : "Programming",	
  module_no : 1220,		
  department : "ASV"		
};

document.writeln(course.name);	//OUTPUTS Programming


// CREATE YOUR OWN OBJECTS
function student(id, name, department){
	this.id = id,
  this.name = name,
  this.department = department
};
var s1 = new student ( 199090, "Sylvia", "Business");
var s2 = new student ( 199045, "Donna", "IT");
var s3 = new student ( 199056, "Hana", "Engineering");

document.writeln(s1.id);	//OUTPUTS 199090
document.writeln(s2.name);	//OUTPUTS Donna
document.writeln(s3.department);	//OUTPUTS Engineering


//OBJECT METHODS
document.writeln("Happy coding");

//ADDING METHODS
function module( id, hoursTaught) {
    this.id = id;
    this.hoursTaught = hoursTaught;
    this.hoursRemaining = remainingHours;
}

function remainingHours() {
    return 40 - this.hoursTaught;
}

var c = new module(1223, 22);
document.write(c.hoursRemaining());
