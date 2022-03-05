// Requiring Employee Class
const Employee = require("./Employee");

// Extending Employee Class With Manager which includes an OfficeNumber Parameter
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
       return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

// Exporting the Class to use in the application and tests
module.exports = Manager