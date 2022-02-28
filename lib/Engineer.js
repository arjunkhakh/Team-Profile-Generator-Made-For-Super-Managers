const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;

        super(this.name, this.id, this.email)
    }

    getRole(){
        return "Engineer";
    }
}