const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    getGithub(){
        console.log("https://github.com/" + this.github)
    }

    getRole(){
        return "Manager";
    }
}