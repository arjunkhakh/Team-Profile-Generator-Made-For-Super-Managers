const Employee = require("./Employee");

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

var ine = new Intern("arjun", 22, "ajdjdjdj", "sjjsjd")

console.log(ine.getSchool())
