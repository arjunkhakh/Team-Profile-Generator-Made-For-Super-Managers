const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school){
        this.school = school;

        super(this.name, this.id, this.email)
    }

    getSchool(){
        console.log(this.school)
    }

    getRole(){
        return "Intern";
    }
}