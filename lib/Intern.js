// Requiring Employee Class
const Employee = require("./Employee");

// Extending Employee Class With Intern which includes a School Parameter
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern";
    }
}

// Exporting the Class to use in the application and tests
module.exports = Intern